import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";

const Navbar = () => {
  const [isDarkModeActive, setIsDarkModeActive] = useState(false);

  return (
    <nav className="flex justify-around items-center h-10">
      {/* nav logo */}

      <SiBloglovin className="text-2xl text-teal-500 hover:text-teal-700 cursor-pointer" />

      {/* nav links*/}

      <div className="flex gap-2 nav-border px-3">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/articles_list" className="nav-links">
          Articles
        </Link>
        <Link to="/login" className="nav-links">
          Log in
        </Link>
        <Link to="/signup" className="nav-links">
          Sign up
        </Link>
        <Link to="/" className="nav-links">
          Uses
        </Link>
      </div>

      {/* nav light/dark mode toggle */}

      {!isDarkModeActive ? (
        <div className="nav-border px-3 py-2">
          <BsSun
            className="text-teal-500 hover:text-teal-600 transition transition-duration-300 text-2xl cursor-pointer"
            onClick={() => {
              setIsDarkModeActive(true);
            }}
          />
        </div>
      ) : (
        <div className="nav-border px-3 py-2">
          <BsMoonStars
            className="text-teal-500 hover:text-teal-600 transition transition-duration-300 text-xl cursor-pointer"
            onClick={() => {
              setIsDarkModeActive(false);
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
