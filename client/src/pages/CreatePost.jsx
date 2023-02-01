import { useState } from "react";
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
    img: "",
  });

  const generateImg = () => {};

  const handleSubmit = () => {};

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

      <form onClick={handleSubmit}>
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
            {form.img ? (
              <img
                src={form.img}
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
                onClick={generateImg}
              >
                <Loader />
              </div>
            )}
          </div>
          <div>
            <button
              type="button"
              className="bg-blue-700 px-4 py-2 text-white hover:bg-blue-800 rounded-md w-full md:w-1/5"
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
