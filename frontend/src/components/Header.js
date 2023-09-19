import { useAuthContext } from "../hooks/useAuthContext";
import { useState } from "react";
import { useLogout } from "../hooks/useLogout";
import { Link, NavLink } from "react-router-dom";

// images
import ntzImg from "../assets/images/nietzsche.webp";

// icons
import { SiBloglovin } from "react-icons/si";
import { BsSun, BsMoonStars } from "react-icons/bs";
import { MdKeyboardArrowDown } from "react-icons/md";

// components
import NavigationMenu from "./NavigationMenu";

const Header = ({ isDarkMode, setIsDarkMode }) => {
  const { user } = useAuthContext();
  const [isNavigationMenu, setIsNavigationMenu] = useState(false);
  const { logout } = useLogout();

  return (
    <header className="relative mx-auto flex h-10 max-w-7xl items-center justify-end gap-4 pr-5 pt-8 md:justify-around md:gap-0 md:pr-0">
      {/* header logo */}
      <Link to="/" className="hidden cursor-pointer md:block">
        {user && (
          <div className="flex items-center gap-3 font-cinzel font-semibold text-teal-500">
            <div className="h-10 w-10 ">
              <img
                src={ntzImg}
                alt="nieztsche image"
                className="h-full w-full rounded-full object-cover"
              />
            </div>
            <span>{user.user.username}</span>
          </div>
        )}

        {!user && (
          <SiBloglovin className="text-2xl text-teal-500 hover:text-teal-700" />
        )}
      </Link>

      {/* navbar */}
      <nav>
        <ul
          className={`nav-border ${
            user ? "mr-20" : "mr-0"
          } hidden gap-2 px-3 md:flex`}
        >
          <li className="nav-links">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="nav-links">
            <NavLink to="/articles_list">Articles</NavLink>
          </li>

          {user && (
            <li
              className="nav-links"
              onClick={() => {
                logout();
              }}
            >
              Log out
            </li>
          )}

          {!user && (
            <>
              <li className="nav-links">
                <NavLink to="/login">Log in</NavLink>
              </li>
              <li className="nav-links">
                <NavLink to="/signup">Sign up</NavLink>
              </li>
            </>
          )}
        </ul>
      </nav>

      {/* menu toggle */}
      <div
        className="nav-border group flex cursor-pointer items-center gap-3 px-4 py-2 text-sm font-medium md:hidden"
        onClick={() => setIsNavigationMenu(true)}
      >
        <span className="dark:text-white"> Menu</span>
        <MdKeyboardArrowDown className="text-zinc-500 group-hover:font-bold group-hover:text-zinc-800 dark:group-hover:text-white" />
      </div>

      <NavigationMenu
        isNavigationMenu={isNavigationMenu}
        setIsNavigationMenu={setIsNavigationMenu}
        user={user}
        logout={logout}
      />

      {/* light/dark mode toggle */}

      {isDarkMode && (
        <div className="nav-border px-3 py-2  dark:bg-zinc-700/60">
          <BsMoonStars
            className="transition-duration-300 cursor-pointer text-xl text-teal-500 transition hover:text-teal-600 "
            onClick={() => setIsDarkMode(false)}
          />
        </div>
      )}

      {!isDarkMode && (
        <div className="nav-border px-3 py-2 ">
          <BsSun
            className="transition-duration-300 cursor-pointer text-2xl text-teal-500 transition hover:text-teal-600"
            onClick={() => setIsDarkMode(true)}
          />
        </div>
      )}
    </header>
  );
};

export default Header;
