import React from "react";
import testImg from "../../../images/test-img.jpg";

const ShowcaseBlogs = () => {
  return (
    <div className="flex gap-8 justify-center absolute top-[550px] w-full">
      <div className="h-[320px] w-[288px]">
        <img
          src={testImg}
          alt=""
          className="h-full w-full object-cover rounded-xl rotate-3"
        />
      </div>
      <div className="h-[320px] w-[288px]">
        <img
          src={testImg}
          alt=""
          className="h-full w-full object-cover rounded-xl -rotate-3"
        />
      </div>
      <div className="h-[320px] w-[288px]">
        <img
          src={testImg}
          alt=""
          className="h-full w-full object-cover rounded-xl rotate-2"
        />
      </div>
      <div className="h-[320px] w-[288px]">
        <img
          src={testImg}
          alt=""
          className="h-full w-full object-cover rounded-xl rotate-2"
        />
      </div>
      <div className="h-[320px] w-[288px]">
        <img
          src={testImg}
          alt=""
          className="h-full w-full object-cover rounded-xl -rotate-2"
        />
      </div>
    </div>
  );
};

export default ShowcaseBlogs;
