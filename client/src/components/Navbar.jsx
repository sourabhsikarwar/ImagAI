import logo from "../../public/assets/AI.png";

const Navbar = () => {
  return (
    <nav className="bg-white p-4 flex justify-between items-center">
      <div className="flex gap-2 text-gray-800 items-center">
        <img className="w-10" src={logo} alt="logo" />
        <h1 className="text-xl font-bold hidden sm:block">ImagAI</h1>
      </div>
      <a className="bg-gray-800 px-4 text-white py-1 rounded shadow hover:bg-gray-900" href="/">
        Create
      </a>
    </nav>
  );
};

export default Navbar;
