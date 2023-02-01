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
  const [searchText, setSearchText] = useState(null);
  const [allPosts, setAllPosts] = useState();

  return (
    <div className="min-h-screen p-4">
      <div className="py-4 md:py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-800 my-2">
          The ImagAI Community Showcase
        </h1>
        <p className="text-gray-500 w-full md:w-3/4">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint
          quibusdam ea assumenda quidem impedit quaerat debitis, in explicabo
          quasi temporibus necessitatibus dolorum. Ratione.
        </p>
      </div>

      <div className="my-4">
        <FormField />
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
            <div className="flex flex-wrap gap-2">
              {searchText ? (
                <RenderCards data={[]} title="No search results found" />
              ) : (
                <RenderCards data={[]} title="No posts found" />
              )}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Home;
