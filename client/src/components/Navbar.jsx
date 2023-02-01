import logo from "../assets/AI.png";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <Link to="/">
        <div className="flex gap-2 text-gray-800 items-center">
          <img className="w-10" src={logo} alt="logo" />
          <h1 className="text-xl font-bold hidden sm:block">ImagAI</h1>
        </div>
      </Link>
      <Link
        className="bg-blue-700 px-4 text-white py-2 rounded shadow hover:bg-blue-800"
        to="/create-post"
      >
        Create Post
      </Link>
    </nav>
  );
};

export default Navbar;
