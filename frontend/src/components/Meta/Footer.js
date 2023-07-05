import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex  px-20 items-center border-t-[1px] border-zinc-100 pt-10 pb-16 mt-20">
      {/* Links */}
      <div className="flex gap-2 px-3 mr-auto ">
        <Link to="/" className="nav-links">
          About
        </Link>
        <Link to="/" className="nav-links">
          Articles
        </Link>
        <Link to="/" className="nav-links">
          Projects
        </Link>
        <Link to="/" className="nav-links">
          Speaking
        </Link>
        <Link to="/" className="nav-links">
          Uses
        </Link>
      </div>

      {/* Copyright */}
      <p className="text-sm text-zinc-400">
        {" "}
        &copy; 2023 Hamza Eshoul. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
