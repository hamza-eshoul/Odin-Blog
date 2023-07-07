import React from "react";
import navLogo from "../images/blog-logo.png";

const PresentationSection = () => {
  return (
    <section className="flex flex-col gap-2 max-w-3xl pl-24 pt-16 mb-[480px]">
      <div className="h-32 w-32">
        <img src={navLogo} className="h-full w-full object-cover" />
      </div>

      <h1 className="text-5xl font-bold pb-6">
        {" "}
        Über Blog, the must-read blog to overcome onself.
      </h1>

      <p className="text-zinc-600/90 leading-7 text-justify">
        This blog is built upon the foundational philosophy of self-overcoming
        which is a fundamental principle of Friedrich Nietzsche's philosophy.
        The basic premise of this blog is that each article should aim to allow
        its readers to grow and overcome themselves.
      </p>
    </section>
  );
};

export default PresentationSection;
