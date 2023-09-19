import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// icons
import { MdKeyboardArrowRight } from "react-icons/md";

// utils
import formatDate from "../utility/formatDate";

const ArticleCard = ({ title, introduction, date, articleId, isStacked }) => {
  const [articleCardDate, setArticleCardDate] = useState(null);

  useEffect(() => {
    setArticleCardDate(formatDate(date));
  }, [date]);

  if (!isStacked) {
    return (
      <div className="flex gap-3">
        {/* Date */}
        <time className="w-1/4 p-8 text-sm text-zinc-400 dark:text-zinc-500">
          {articleCardDate}
        </time>

        {/* Article Information */}
        <div className="flex w-3/4 cursor-pointer flex-col gap-3 rounded-xl p-6 transition duration-150 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50">
          {/* Title */}
          <h2 className="font-semibold dark:text-white"> {title} </h2>
          {/* Article Introduction */}
          <p className="text-justify text-sm leading-6 text-zinc-600 dark:text-zinc-400">
            {introduction}
          </p>
          {/* Read Article */}{" "}
          <Link
            to={`/article/${articleId}`}
            className="flex cursor-pointer items-center gap-1 text-sm font-medium text-teal-500"
          >
            Read article
            <MdKeyboardArrowRight />
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Article Information */}
      <div className="flex cursor-pointer flex-col gap-3 rounded-xl p-6 transition duration-150 hover:bg-zinc-50/80 dark:hover:bg-zinc-800/50">
        <div className="flex items-center gap-3">
          <span className="h-[16px] w-[2.5px] bg-zinc-200 dark:bg-zinc-500"></span>
          <time className="text-sm text-zinc-400 dark:text-zinc-500">
            {articleCardDate}
          </time>
        </div>
        {/* Title */}
        <h2 className="font-semibold dark:text-white"> {title} </h2>
        {/* Article Introduction */}
        <p className="text-justify text-sm leading-6 text-zinc-600 dark:text-zinc-400">
          {introduction}
        </p>
        {/* Read Article */}{" "}
        <Link
          to={`/article/${articleId}`}
          className="flex cursor-pointer items-center gap-1 text-sm font-medium text-teal-500"
        >
          Read article
          <MdKeyboardArrowRight />
        </Link>
      </div>
    </>
  );
};

export default ArticleCard;
