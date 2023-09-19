import { useState } from "react";
import { useSignup } from "../hooks/useSignup";
import { Link } from "react-router-dom";

// components
import Error from "../components/Error";

const Signup = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const { error, isPending, signup } = useSignup();

  const handleSubmit = async (e) => {
    e.preventDefault();

    await signup("https://odin-blog-api-rezs.onrender.com/user/signup", {
      username,
      password,
    });
  };

  return (
    <main className="relative mx-auto max-w-7xl">
      <section className="mx-auto my-48 max-w-2xl px-4 sm:px-8">
        <form
          className="flex flex-col items-center gap-5 rounded-lg border-[1px] border-zinc-200 bg-white  px-6 py-10 dark:border-zinc-700  dark:bg-zinc-800/90 sm:px-10"
          onSubmit={handleSubmit}
        >
          <h1 className="text-4xl font-bold dark:text-white"> Sign Up</h1>
          <p className="text-center leading-7 text-zinc-700/90 dark:text-zinc-400">
            Already have an account ?{" "}
            <Link to="/login" className="font-medium text-teal-500">
              {" "}
              Log in
            </Link>
          </p>

          <div className="flex w-full flex-col gap-3">
            <label className="space-y-2 text-lg font-semibold dark:text-zinc-300">
              {" "}
              <span>Username: </span>
              <input
                type="text"
                className="auth-input"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
            </label>

            <label className="space-y-2 text-lg font-semibold dark:text-zinc-300">
              {" "}
              <span>Password</span>
              <input
                type="password"
                className="auth-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="account password"
              />
            </label>
          </div>

          <button className="cursor-pointer rounded-lg bg-teal-400 px-10 py-2.5 font-medium text-white hover:bg-teal-500/90 dark:bg-teal-500/80  dark:hover:bg-teal-500/90">
            {isPending ? "Loading ..." : "Sign up"}
          </button>

          {error && <Error error={error} errorHeight={"h-full"} />}
        </form>
      </section>
    </main>
  );
};

export default Signup;
