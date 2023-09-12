import { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-router-dom";
import { useArticleContext } from "../hooks/useArticleContext";

const BlogCards = ({ title, introduction, date, articleId }) => {
  // state
  const [blogCardFormatDate, setBlogCardFormatDate] = useState();

  // hooks
  const { dispatch, formatDate } = useArticleContext();
  useEffect(() => {
    formatBlogCardDate(date);
  }, [date]);

  // functions

  const setArticle = () => {
    dispatch({ type: "SET_ARTICLE_ID", payload: articleId });
  };

  const formatBlogCardDate = (date) => {
    const formatResult = formatDate(date);
    setBlogCardFormatDate(formatResult);
  };

  return (
    <div className="flex flex-col gap-3  rounded-xl hover:bg-zinc-50/80 transition duration-150 cursor-pointer p-6 dark:hover:bg-zinc-800/50">
      {/* Date */}
      <div className="flex gap-3 items-center">
        <span className="w-[2.5px] h-[16px] bg-zinc-200 dark:bg-zinc-500"></span>
        <div className="text-sm text-zinc-400 dark:text-zinc-500">
          {blogCardFormatDate}
        </div>
      </div>

      {/* Title */}
      <h1 className="font-semibold dark:text-white"> {title}</h1>
      {/* Article Abstract */}
      <p className="text-zinc-600 text-sm leading-6 text-justify dark:text-zinc-400">
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
