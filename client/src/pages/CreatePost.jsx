import { useState } from "react"
import { redirect } from "react-router-dom"
import FormField from "../components/FormField";
import preview from "../assets/preview.png";
import Loader from "../components/Loader";
import { generateRandomPrompt } from "../utils/randomPrompt";

const CreatePost = () => {
  const [generatingImg, setGeneratingImg] = useState(false);
  const [loading, setLoading] = useState(false);
  const [form, setForm] = useState({
    name: "",
    prompt: "",
    photo: "",
  });

  const generateImg = async () => {
    if(form.prompt){
      try {
        setGeneratingImg(true)
        const response = await fetch('http://localhost:8080/api/v1/dalle', {
          method: 'POST',
          headers : {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({prompt: form.prompt})
        })
        const data = await response.json()
        setForm({ ...form, photo: `data:image/jpeg;base64,${data.photo}`})
      } catch (error) {
        alert(error)
      } finally {
        setGeneratingImg(false)
      }
    } else {
      alert('Please enter a prompt!')
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if(form.prompt && form.photo){
      setLoading(true)

      try {
        const response = await fetch('http://localhost:8080/api/v1/post', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(form)
        })
        await response.json()
        redirect('/')
      } catch (error) {
        alert(error)
      } finally {
        setLoading(false)
      }
    } else {
      alert('Please enter a prompt!')
    }
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSurpriseMe = () => {
    const randomPrompt = generateRandomPrompt()

    setForm({ ...form, prompt : randomPrompt});
  };

  return (
    <section className="min-h-screen p-4">
      <div className="py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 my-2">
          Create
        </h1>
        <p className="text-gray-500 text-md w-full md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde quis
          fuga modi!
        </p>
      </div>

      <form>
        <div className="flex flex-col gap-2">
          <FormField
            name="name"
            type="text"
            placeholder="Sourabh Sikarwar"
            labelName="Name"
            value={form.name}
            handleChange={handleChange}
          />
          <FormField
            name="prompt"
            type="text"
            placeholder="a stained glass window depicting a hamburger and french fries"
            labelName="Prompt"
            value={form.prompt}
            handleChange={handleChange}
            isSurpriseMe
            handleSurpriseMe={handleSurpriseMe}
          />
          <div className="relative my-2 bg-gray-50 border border-gray-300 text-sm p-3 w-64 h-64 flex justify-center items-center focus:border-blue-500 rounded-lg">
            {form.photo ? (
              <img
                src={form.photo}
                alt={form.prompt}
                className="w-full h-full object-contain"
              />
            ) : (
              <img
                src={preview}
                alt="preview"
                className="w-3/4 h-3/4 opacity-40"
              />
            )}
            {generatingImg && (
              <div
                className="absolute inset-0 flex justify-center items-center bg-[rgba(0,0,0,0.5)] rounded-lg"
              >
                <Loader />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 rounded-md w-full md:w-1/5"
              onClick={generateImg}
            >
              {generatingImg ? "Generating..." : "Generate"}
            </button>
          </div>
        </div>

        <div className="my-16">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 my-2">
            Share this with Community
          </h2>
          <p className="mb-4 text-gray-500 text-md">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur, aliquid!
          </p>
          <button
            type="submit"
            onClick={handleSubmit}
            className="bg-gray-800 px-4 py-2 text-white hover:bg-gray-900 rounded-md w-full md:w-1/5"
          >
            {loading ? "Sharing..." : "Share"}
          </button>
        </div>
      </form>
    </section>
  );
};

export default CreatePost;
