import { IoCartOutline } from "react-icons/io5";

const NavBar = () => {
  return (
    <div className="navbar w-10/12 mx-auto">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-3xl font-bold">DegiTools</h1>
        </div>
      </div>
      <div className="navbar-center hidden md:flex">
        <ul className="menu menu-horizontal gap-10 px-1 text-lg">
          <li>
            <a>Home</a>
          </li>
          <li>
            <a>About</a>
          </li>
          <li>
            <a>Services</a>
          </li>
          <li>
            <a> Contact</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end gap-5">
        <a className="flex justify-center items-center text-xl  gap-5"><IoCartOutline />
          
          
          Login</a>
        <a className="btn bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-white">Get Started</a>
      </div>
    </div>
  );
};

export default NavBar;