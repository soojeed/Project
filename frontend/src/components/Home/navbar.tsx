import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex justify-between p-4 shadow-md bg-[#f0f0f0]">
      <div className="flex justify-between w-full mx-5 items-center">
        
        <h1 className="text-blue-900 font-bold text-xl">LOGO</h1>

        <nav>
          <ul className="flex gap-4 font-bold text-lg items-center">
            
            <li>
              <Link to="/" className="hover:text-blue-700">
                Home
              </Link>
            </li>

            <li>
              <Link to="/about" className="hover:text-blue-700">
                About
              </Link>
            </li>

            <li>
              <Link to="/contact" className="hover:text-blue-700">
                Contact
              </Link>
            </li>

            <li>
              <Link
                to="/login"
                className="bg-red-500 px-3 py-2 rounded text-white"
              >
                Login
              </Link>
            </li>

            <li>
              <Link
                to="/register"
                className="bg-red-500 px-3 py-2 rounded text-white"
              >
                Register
              </Link>
            </li>

          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;