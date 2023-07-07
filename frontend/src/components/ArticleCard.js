import React, { useEffect, useState } from "react";
import { MdKeyboardArrowRight } from "react-icons/md";
import { useArticleContext } from "../hooks/useArticleContext";
import { Link } from "react-router-dom";

const ArticleCard = ({ title, introduction, date, articleId }) => {
  const [articleCardDate, setArticleCardDate] = useState();
  const { dispatch, formatDate } = useArticleContext();

  const setArticle = () => {
    dispatch({ type: "SET_ARTICLE_ID", payload: articleId });
  };

  const formatArticleCardDate = (date) => {
    const formatResult = formatDate(date);
    setArticleCardDate(formatResult);
  };

  useEffect(() => {
    formatArticleCardDate(date);
  }, [date]);

  return (
    <div className="flex gap-3">
      {/* Date */}
      <div className="w-1/4 text-sm text-zinc-400 p-8">{articleCardDate}</div>
      {/* Article Information */}
      <div className="flex flex-col w-3/4 gap-3 rounded-xl hover:bg-zinc-50/80 transition duration-150 cursor-pointer p-6 ">
        {/* Title */}
        <h1 className="font-semibold"> {title} </h1>
        {/* Article Abstract */}
        <p className="text-zinc-600 text-sm leading-6 text-justify">
          {introduction}
        </p>
        {/* Read Article */}{" "}
        <Link to="/article" onClick={setArticle}>
          {" "}
          <button className="text-teal-500 font-medium text-sm flex items-center gap-1">
            {" "}
            Read article
            <MdKeyboardArrowRight />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ArticleCard;
