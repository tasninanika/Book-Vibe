import { NavLink } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const links = (
    <>
      <li className="text-base text-gray-600">
        <NavLink
          to="/"
          className={({ isActive }) => (isActive ? "active-navlink" : "")}
        >
          Home
        </NavLink>
      </li>
      <li className="text-lg text-gray-600">
        <NavLink to="/listedBooks">Listed Books</NavLink>
      </li>
      <li className="text-lg text-gray-600">
        <NavLink to="/dashboard">Pages to Read</NavLink>
      </li>
    </>
  );
  return (
    <div>
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <a className="text-3xl font-bold">Book Vibe</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{links}</ul>
        </div>
        <div className="navbar-end gap-2">
          <a className="btn bg-green-400 text-white rounded-lg font-semibold">
            Sign In
          </a>
          <a className="btn bg-red-400 text-white rounded-lg font-semibold">
            Sign Up
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
