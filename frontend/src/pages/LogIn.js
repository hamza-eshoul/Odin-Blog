import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative">
      <Navbar />

      {/* Log in */}
      <section className="max-w-2xl mx-auto bg-white border-[1px] my-48 border-zinc-200  rounded-lg p-10 ">
        {/* Header */}
        <div className="flex flex-col gap-2 items-center">
          <h1 className="text-4xl font-bold"> Log In</h1>
          <p className="text-zinc-700/90 leading-7 text-justify">
            Don't have an account ?{" "}
            <Link to="/signup" className="text-teal-500">
              {" "}
              Sign up
            </Link>
          </p>
        </div>
        {/* Sign up */}
        <div className="flex flex-col gap-6 mt-6">
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold"> Username: </h1>
            <input
              type="text"
              className="bg-teal-500/60 rounded-lg h-9 w-full outline-zinc-100"
            />
          </div>
          <div className="flex flex-col gap-3">
            <h1 className="text-lg font-semibold"> Password: </h1>
            <input
              type="text"
              className="bg-teal-500/60 rounded-lg w-full h-9 outline-zinc-100"
            />
          </div>

          <div className="flex justify-center items-center">
            <button className=" bg-teal-500 hover:bg-teal-600 text-white font-medium  py-2.5 rounded-lg w-1/4 ">
              {" "}
              Log In
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Login;
