import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link, useNavigate } from "react-router-dom";
import { MoonLoader } from "react-spinners";
import { useAuthContext } from "../hooks/useAuthContext";

const Login = () => {
  // state
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  // hooks
  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  // functions
  const handleSignup = (e) => {
    setIsLoading(true);
    setError(null);

    e.preventDefault();
    // signup POST request
    const signupUser = async () => {
      const response = await fetch("http://localhost:4000/user/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const json = await response.json();

      if (!response.ok) {
        setIsLoading(false);
        setError(json.error);
      }

      if (response.ok) {
        // save the user to local storage
        localStorage.setItem("user", JSON.stringify(json));

        // update the loading state
        setIsLoading(false);

        // update the global user state
        dispatch({ type: "LOGIN", payload: json });

        // navigate to homepage
        navigate("/");
      }
    };

    signupUser();
  };

  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative dark:bg-zinc-900 dark:border-zinc-800/90">
      <Navbar />

      {/* Log in */}
      <section className="max-w-2xl mx-auto bg-white border-[1px] my-48 border-zinc-200  rounded-lg p-10 dark:bg-zinc-800/90 dark:border-zinc-700">
        {/* Form */}

        <form
          className="flex flex-col gap-2 items-center"
          onSubmit={handleSignup}
        >
          <h1 className="text-4xl font-bold dark:text-white"> Sign Up</h1>
          <p className="text-zinc-700/90 leading-7 text-justify dark:text-zinc-400">
            Already have an account ?{" "}
            <Link to="/login" className="text-teal-500">
              {" "}
              Log in
            </Link>
          </p>
          <div className="flex flex-col gap-6 mt-6 w-full">
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold dark:text-zinc-300">
                {" "}
                Username:{" "}
              </label>
              <input
                type="text"
                className="bg-teal-200/70 font-medium rounded-lg h-9 w-full outline-zinc-100 py-5 px-3 dark:bg-teal-400/70 dark:text-white dark:font-semibold dark:outline-zinc-600/50"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="flex flex-col gap-3">
              <label className="text-lg font-semibold dark:text-zinc-300">
                {" "}
                Password:{" "}
              </label>
              <input
                type="password"
                className="bg-teal-200/70 font-medium rounded-lg w-full h-9 outline-zinc-100 py-5 px-3 dark:bg-teal-400/70 dark:text-white dark:font-semibold dark:outline-zinc-600/50"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div className="flex justify-center items-center">
              {isLoading ? (
                <MoonLoader
                  color={"#14b8a6"}
                  loading={isLoading}
                  size={45}
                  aria-label="Loading Spinner"
                  data-testid="loader"
                />
              ) : (
                <button className=" bg-teal-400/90 hover:bg-teal-500/90 cursor-pointer text-white font-medium  py-2.5 rounded-lg w-1/4 dark:text-zinc-900 dark:bg-teal-400/80 dark:hover:bg-teal-400/90">
                  {" "}
                  Sign Up
                </button>
              )}
            </div>
            {error !== null ? (
              <div className="text-red-500 font-semibold text-center text-lg">
                {" "}
                {error}{" "}
              </div>
            ) : (
              ""
            )}
          </div>
        </form>
      </section>

      <Footer />
    </main>
  );
};

export default Login;
