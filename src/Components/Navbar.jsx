import { IoCartOutline } from "react-icons/io5";
import { toast } from "react-toastify";

const NavBar = ({ carts }) => {

  const navBtn = () => {
    toast.warning("Sorry");
  }

  return (
    <div className="sticky top-0 z-50 bg-white">
      <div className="navbar w-10/12 mx-auto  ">
      <div className="navbar-start">
        <div className="flex items-center gap-1 font-bold text-xl">
          <h1 className="bg-linear-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-lg font-bold sm:text-3xl">DegiTools</h1>
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
      <div className="navbar-end gap-2 sm:gap-5">
        <a className="flex justify-center items-center text-xl  gap-2 sm:gap-5"><IoCartOutline /><div>
          {carts.length > 0 && (
            <span className="absolute top-2 right-44 sm:right-53   bg-red-500 text-white text-xs px-2 py-0.5 rounded-full">
              {carts.length}
            </span>
          )}
        </div>
         
          Login</a>
        <button onClick={navBtn} className="btn bg-linear-to-r from-blue-500 to-purple-500 rounded-full text-white">Get Started</button>
      </div>
    </div>
    </div>
  );
};

export default NavBar;