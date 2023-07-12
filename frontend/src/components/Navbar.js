import React from "react";
import { Link } from "react-router-dom";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { SiBloglovin } from "react-icons/si";
import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { useDarkModeContext } from "../hooks/useDarkModeContext";
import ntzImg from "../images/nietzsche.webp";

const Navbar = () => {
  // hooks
  const { user } = useAuthContext();
  const { logout } = useLogout();
  const { isDarkModeActive, dispatch } = useDarkModeContext();

  // functions
  const handleLogout = () => {
    logout();
  };

  return (
    <nav className="flex justify-around items-center h-10 ">
      {/* nav logo */}

      <Link to="/">
        {!user ? (
          <SiBloglovin className="text-2xl text-teal-500 hover:text-teal-700 cursor-pointer" />
        ) : (
          <div className="text-teal-500 font-semibold flex gap-3 items-center cursor-pointer font-cinzel">
            <div className="w-10 h-10 ">
              <img
                src={ntzImg}
                alt=""
                className="h-full w-full object-cover rounded-full"
              />
            </div>
            {user.user.username}
          </div>
        )}
      </Link>

      {/* nav links*/}

      {!user ? (
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
        </div>
      ) : (
        <div className="flex gap-2 nav-border px-3 mr-28">
          <Link to="/" className="nav-links">
            Home
          </Link>
          <Link to="/articles_list" className="nav-links">
            Articles
          </Link>
          <button className="nav-links" onClick={handleLogout}>
            Log out
          </button>
        </div>
      )}

      {/* nav light/dark mode toggle */}

      {!isDarkModeActive ? (
        <div className="nav-border px-3 py-2">
          <BsSun
            className="text-teal-500 hover:text-teal-600 transition transition-duration-300 text-2xl cursor-pointer"
            onClick={() => {
              dispatch({ type: "SET_DARK_MODE" });
            }}
          />
        </div>
      ) : (
        <div className="nav-border px-3 py-2 dark:bg-zinc-700/60">
          <BsMoonStars
            className="text-teal-500 hover:text-teal-600 transition transition-duration-300 text-xl cursor-pointer "
            onClick={() => {
              dispatch({ type: "REMOVE_DARK_MODE" });
            }}
          />
        </div>
      )}
    </nav>
  );
};

export default Navbar;
