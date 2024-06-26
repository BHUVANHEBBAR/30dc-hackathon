// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <div className="w-full fixed z-10 sm:w-screen">
      <nav className="bg-bgPrimary border-btnColor">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4 md:p-6 lg:p-8">
          <Link to="#" className="flex items-center space-x-3 rtl:space-x-reverse">
            <img
              src="/assets/plant.png"
              className="h-8"
              alt="TSA Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap">
              Tiny Sprouts Academy
            </span>
          </Link>
          <button
            onClick={toggleDropdown}
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200"
            aria-controls="navbar-dropdown"
            aria-expanded={isDropdownOpen ? "true" : "false"}
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div className={`w-full md:block md:w-auto ${isDropdownOpen ? "" : "hidden"}`} id="navbar-dropdown">
            <ul className="flex flex-col font-medium p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:space-x-8 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0 md:bg-bgPrimary">
              <li>
                <Link
                  to=""
                  className="block py-2 px-3 text-black rounded md:bg-transparent md:p-0 hover:text-blue-700 hover:font-bold"
                  aria-current="page"
                >
                  Preschool <br/>Admission
                </Link>
              </li>
              <li>
              <li>
                      <Link to="/facilities" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:font-bold">
                        Our <br/>Facilites</Link>
                    </li>
                    
                
              </li>
              <li>
                <Link
                  to="/blog"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:font-bold"
                >
                  Our <br/>Blogs
                </Link>
              </li>
              <li>
                <Link
                  to="/locate"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:font-bold"
                >
                  Locate <br/> Us
                </Link>
              </li>
              <li>
                <Link
                  to="/contactus"
                  className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:font-bold"
                >
                  Contact <br/> Us
                </Link>
              </li>
              <li>
                <Link to="/admin" className="block py-2 px-3 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 hover:font-bold">
                  Admin <br/>Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
