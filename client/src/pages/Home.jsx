import FormField from "../components/FormField";
import Cards from "../components/Cards";
import Loader from "../components/Loader";
import { useState, useEffect } from "react";

const RenderCards = ({ data, title }) => {
  if (data?.length > 0) {
    return data.map((post) => <Cards key={post._id} {...post} />);
  }
  return <h2 className="font-semibold text-2xl">{title}</h2>;
};

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [searchText, setSearchText] = useState("");
  const [allPosts, setAllPosts] = useState();
  const [searchedResults, setSearchedResults] = useState(null);
  const [searchTimeout, setSearchTimeout] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);

      try {
        const response = await fetch("http://localhost:8080/api/v1/post", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (response.ok) {
          const results = await response.json();
          setAllPosts(results.data.reverse());
        }
      } catch (error) {
        alert(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const handleSearchChange = (e) => {
    clearTimeout(searchTimeout);
    setSearchText(e.target.value);

    setSearchTimeout(
      setTimeout(() => {
        const searchResults = allPosts.filter(
          (item) =>
            item.name.toLowerCase().includes(searchText.toLowerCase()) ||
            item.prompt.toLowerCase().includes(searchText.toLowerCase())
        );

        setSearchedResults(searchResults);
      }, 500)
    );
  };

  return (
    <div className="min-h-screen p-4">
      <div className="py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 my-2">
          The ImagAI Community Showcase
        </h1>
        <p className="text-gray-500 w-full md:w-3/4">
          Experience the power of AI with these AI generated image. Create your own image with custom prompt and share it with the community.
        </p>
      </div>

      <div className="my-4">
        <FormField name="text" type="text" labelName="Search Posts" placeholder="gray panda in a city" value={searchText} handleChange={handleSearchChange}/>
      </div>

      <div className="mt-10">
        {loading ? (
          <div className="flex justify-center items-center">
            <Loader />
          </div>
        ) : (
          <>
            {searchText && (
              <h2 className="text-xl">
                Showing results for{" "}
                <span className="font-semibold">{searchText}</span>
              </h2>
            )}
            <div className="mt-4 grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4">
              {searchText ? (
                <RenderCards data={searchedResults} title="No search results found" />
              ) : (
                <RenderCards data={allPosts} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
