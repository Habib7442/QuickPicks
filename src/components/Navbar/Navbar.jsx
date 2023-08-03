import { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import CartBadge from "../CartBadge";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav
      className="bg-gradient-to-r shadow-lg"
      style={{ backgroundColor: "#f6e6d9" }}
    >
      <div className="container mx-auto px-4 py-2 md:flex md:items-center md:justify-between">
        <div className="flex items-center justify-between">
          <Link to="/" className="text-white font-bold text-xl">
            <img className="w-20 h-20" src={logo} alt="logo" />
          </Link>
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={toggleMenu}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        <div
          className={`${
            isMenuOpen ? "block" : "hidden"
          } md:flex md:space-x-4 md:w-auto mt-2 md:mt-0`}
        >
          <Link
            to="/"
            className="block text-black font-semibold hover:text-yellow-300 py-1 md:py-0"
          >
            Home
          </Link>
          <a
            href="#"
            className="block text-black font-semibold hover:text-yellow-300 py-1 md:py-0"
          >
            Shop
          </a>
          <a
            href="#"
            className="block text-black font-semibold hover:text-yellow-300 py-1 md:py-0"
          >
            About
          </a>
          <a
            href="#"
            className="block text-black font-semibold hover:text-yellow-300 py-1 md:py-0"
          >
            Contact
          </a>
          <Link
            to="/cart"
            className="block text-black font-semibold hover:text-yellow-300"
          >
            <CartBadge />
          </Link>
        </div>
        {/* <div className="relative">
          <div className="absolute inset-y-0 left-0 flex items-center pointer-events-none">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 19l-6-6m0 0l-6-6m6 6l-6 6m6-6l6 6"
              />
            </svg>
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-4 py-2 text-sm placeholder-gray-600 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            placeholder="Search..."
          />
        </div> */}
      </div>
    </nav>
  );
};

export default Navbar;
