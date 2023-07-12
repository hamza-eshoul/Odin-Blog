import React from "react";
import { Link } from "react-router-dom";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";

const Footer = () => {
  // hooks
  const { user } = useAuthContext();
  const { logout } = useLogout();

  // functions
  const handleLogout = () => {
    logout();
  };
  return (
    <footer className="flex  px-20 items-center border-t-[1px]  border-zinc-100 pt-10 pb-16 mt-20 dark:border-zinc-800">
      {/* Links */}
      <div className="flex gap-2 px-3 mr-auto ">
        <Link to="/" className="nav-links">
          Home
        </Link>
        <Link to="/articles_list" className="nav-links">
          Articles
        </Link>
        {!user ? (
          <div className="flex gap-2 px-3">
            <Link to="/login" className="nav-links">
              Log in
            </Link>
            <Link to="/signup" className="nav-links">
              Sign up
            </Link>
          </div>
        ) : (
          <div className="flex">
            <button className="nav-links" onClick={handleLogout}>
              Log out
            </button>
          </div>
        )}
      </div>

      {/* Copyright */}
      <p className="text-sm text-zinc-400 dark:text-zinc-500">
        {" "}
        &copy; 2023 Hamza Eshoul. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
