import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useArticleContext } from "../hooks/useArticleContext";

const BlogCards = ({ title, introduction, date, articleId }) => {
  const { dispatch, formatDate } = useArticleContext();
  const [blogCardFormatDate, setBlogCardFormatDate] = useState();

  const setArticle = () => {
    dispatch({ type: "SET_ARTICLE_ID", payload: articleId });
  };

  const formatBlogCardDate = (date) => {
    const formatResult = formatDate(date);
    setBlogCardFormatDate(formatResult);
  };

  useEffect(() => {
    formatBlogCardDate(date);
  }, [date]);

  return (
    <div className="flex flex-col gap-3 w-1/2 rounded-xl hover:bg-zinc-50/80 transition duration-150 cursor-pointer p-6 ">
      {/* Date */}
      <div className="flex gap-3 items-center">
        <span className="w-[2.5px] h-[16px] bg-zinc-200"></span>
        <div className="text-sm text-zinc-400">{blogCardFormatDate}</div>
      </div>

      {/* Title */}
      <h1 className="font-semibold"> {title}</h1>
      {/* Article Abstract */}
      <p className="text-zinc-600 text-sm leading-6 text-justify">
        {introduction}
      </p>
      {/* Read Article */}
      <Link to="/article" onClick={setArticle}>
        {" "}
        <button className="text-teal-500 font-medium text-sm flex items-center gap-1">
          {" "}
          Read article
          <MdKeyboardArrowRight />
        </button>
      </Link>
    </div>
  );
};

export default BlogCards;
