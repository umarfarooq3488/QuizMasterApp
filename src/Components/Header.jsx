import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import ToggleBtn from "./ToggleBtn";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-gray-200 border-b-2 border-gray-700 dark:bg-gray-800 absolute rounded-md md:rounded-none w-full transition-all duration-500 text-gray-800 dark:text-white md:sticky top-0 z-20 p-4">
      <div className="flex justify-between items-center">
        {/* Project Name */}
        <div className="text-xl font-bold">
          <NavLink
            to="/"
            className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
          >
            QuizMaster
          </NavLink>
        </div>

        {/* Navigation Tabs */}
        <nav className="md:flex text-lg hidden space-x-6">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 border-b-4 border-red-800 dark:hover:text-blue-400 transition-all duration-300"
                : "hover:text-blue-600 hover:border-b-4 border-red-800 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300"
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/categories"
            className={({ isActive }) =>
              isActive
                ? "hover:text-blue-600 border-b-4 border-red-800 dark:hover:text-blue-400 transition-all duration-300"
                : "hover:text-blue-600 hover:border-b-4 border-red-800 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300"
            }
          >
            Categories
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive
                ? "border-b-4 border-red-800 hover:text-blue-600 dark:hover:text-blue-400 transition-all duration-300"
                : "hover:text-blue-600 hover:border-b-4 border-red-800 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300"
            }
          >
            About Us
          </NavLink>
        </nav>

        {/* Login/Signup Buttons */}
        <div className="md:flex hidden space-x-4">
          <ToggleBtn />
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Login
          </button>
          <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
            Signup
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex gap-3">
          <ToggleBtn />
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-800 dark:text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </div>

      {isOpen && (
        <>
          <div className="md:hidden mt-4">
            <nav className="flex flex-col">
              <NavLink
                to="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-3"
              >
                Home
              </NavLink>
              <NavLink
                to="/categories"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-3"
              >
                Categories
              </NavLink>
              <NavLink
                to="/about"
                className="hover:text-blue-600 dark:hover:text-blue-400 text-gray-600 dark:text-gray-300 transition-all duration-300 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-md p-3"
              >
                About Us
              </NavLink>
            </nav>
          </div>

          {/* Login/Signup Buttons */}
          <div className="flex flex-col md:flex-row my-4 space-y-4">
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
              Login
            </button>
            <button className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded">
              Signup
            </button>
          </div>
        </>
      )}
    </header>
  );
};

export default Header;
