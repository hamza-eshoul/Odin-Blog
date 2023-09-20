import { Link, useNavigate } from "react-router-dom";

// icons
import { RxCross2 } from "react-icons/rx";

// components
import Overlay from "./Overlay";

const NavigationMenu = ({
  isNavigationMenu,
  setIsNavigationMenu,
  user,
  logout,
}) => {
  const navigate = useNavigate();

  return (
    <>
      <div
        className={`${
          isNavigationMenu
            ? "opacity-100"
            : "left-[-9999px] top-[-9999px] opacity-0"
        }  fixed top-20 z-30  ml-2 w-[90%] rounded-2xl bg-white px-6 py-8 transition-opacity duration-300 dark:border-[1px] dark:border-zinc-800 dark:bg-zinc-800 `}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-3 text-zinc-600 dark:text-zinc-400">
          <h2 className="text-sm">Navigation</h2>
          <RxCross2
            className="cursor-pointer text-lg"
            onClick={() => {
              setIsNavigationMenu(false);
            }}
          />
        </div>
        {/* Menu  */}
        <ul>
          <li className="nav-menu-links">
            <Link to="/" onClick={() => setIsNavigationMenu(false)}>
              Home
            </Link>
          </li>
          <li className="nav-menu-links">
            <Link
              to="/articles_list"
              onClick={() => setIsNavigationMenu(false)}
            >
              Articles{" "}
            </Link>
          </li>
          {!user && (
            <>
              {" "}
              <li className="nav-menu-links">
                <Link to="/login" onClick={() => setIsNavigationMenu(false)}>
                  Log in{" "}
                </Link>
              </li>
              <li className="nav-menu-links border-[0px]">
                <Link to="/signup" onClick={() => setIsNavigationMenu(false)}>
                  Sign up{" "}
                </Link>{" "}
              </li>
            </>
          )}
          {user && (
            <li
              className="nav-menu-links border-[0px]"
              onClick={() => {
                logout();
                setIsNavigationMenu(false);
                navigate("/");
              }}
            >
              Log out
            </li>
          )}
        </ul>
      </div>

      {isNavigationMenu && <Overlay />}
    </>
  );
};

export default NavigationMenu;
