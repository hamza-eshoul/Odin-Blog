import { useState } from "react";
import { useLogin } from "../hooks/useLogin";
import { Link } from "react-router-dom";

// components
import Error from "../components/Error";

const Login = () => {
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const { error, isPending, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await login("https://odin-blog-api-rezs.onrender.com/user/login", {
      username,
      password,
    });
  };

  return (
    <main className="relative mx-auto max-w-7xl">
      {/* Log in */}
      <section className="mx-auto my-48 max-w-2xl px-4 sm:px-8">
        {/* Form */}

        <form
          className="flex flex-col items-center gap-5 rounded-lg border-[1px] border-zinc-200 bg-white  px-6 py-10 dark:border-zinc-700  dark:bg-zinc-800/90 sm:px-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold dark:text-white"> Log In</h1>
          <p className="text-center  leading-7 text-zinc-700/90 dark:text-zinc-400">
            Don't have an account ?{" "}
            <Link to="/signup" className="font-medium text-teal-500">
              Sign up
            </Link>
          </p>

          <div className="flex w-full flex-col gap-3">
            <label className="space-y-2 text-lg font-semibold dark:text-zinc-300">
              <span>Username: </span>

              <input
                type="text"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className=" space-y-2 text-lg font-semibold dark:text-zinc-300">
              {" "}
              <span> Password: </span>
              <input
                type="password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="current password"
              />
            </label>
          </div>
          <button className="cursor-pointer rounded-lg bg-teal-400 px-10 py-2.5 font-medium text-white hover:bg-teal-500/90 dark:bg-teal-500/80  dark:hover:bg-teal-500/90">
            {isPending ? "Loading ..." : "Log in"}
          </button>
          {error && <Error error={error} errorHeight={"h-full"} />}
        </form>
      </section>
    </main>
  );
};

export default Login;
