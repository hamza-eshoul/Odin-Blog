import { useAuthContext } from "../hooks/useAuthContext";
import { useLogout } from "../hooks/useLogout";
import { Link } from "react-router-dom";

const Footer = () => {
  const { user } = useAuthContext();
  const { logout } = useLogout();

  return (
    <footer className="relative mx-auto mt-20 flex max-w-7xl flex-col items-center justify-center gap-6 border-t-[1px] border-zinc-100 px-16 py-10 dark:border-zinc-800 md:flex-row ">
      {/* Links */}
      <ul className="mr-auto flex w-full items-center justify-center gap-1 px-3 ">
        <li className="nav-links ">
          <Link to="/">Home</Link>
        </li>

        <li className="nav-links ">
          <Link to="/articles_list">Articles</Link>
        </li>

        {user && (
          <li
            className="nav-links cursor-pointer "
            onClick={() => {
              logout();
            }}
          >
            Log out
          </li>
        )}
        {!user && (
          <>
            <li className="nav-links ">
              <Link to="/login">Log in</Link>
            </li>
            <li className="nav-links ">
              <Link to="/signup">Sign up</Link>
            </li>
          </>
        )}
      </ul>

      {/* Copyright */}
      <span className="w-full text-center text-sm text-zinc-400 dark:text-zinc-500">
        {" "}
        &copy; 2023 Hamza Eshoul. All rights reserved.
      </span>
    </footer>
  );
};

export default Footer;
