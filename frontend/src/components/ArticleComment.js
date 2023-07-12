import React, { useEffect, useState } from "react";
import { SiReactos } from "react-icons/si";
import { useArticleContext } from "../hooks/useArticleContext";

const ArticleComment = ({ author, content, date }) => {
  // state
  const [commentDate, setCommentDate] = useState("");

  // hooks
  const { formatDate } = useArticleContext();
  useEffect(() => {
    formatCommentDate(date);
  }, [date]);

  // functions
  const formatCommentDate = (date) => {
    const formatResult = formatDate(date);
    setCommentDate(formatResult);
  };

  return (
    <div className="flex flex-col gap-3 border-b-[1px] border-zinc-200/80 hover:bg-teal-50/70 p-6 transition transition-duration-300 rounded-lg dark:hover:bg-zinc-800/50 dark:border-zinc-700">
      {/* Comment Author Name */}
      <div className="flex gap-3 items-center justify-between">
        <div className="font-semibold dark:text-white">{author}</div>
        <div
          className={`w-8 h-8 border-[1px] border-zinc-200 hover:bg-teal-500 group rounded-full flex justify-center items-center cursor-pointer transition transition-duration-300 hover:scale-125 dark:border-zinc-600`}
        >
          <SiReactos className="group-hover:text-white text-teal-600" />
        </div>
      </div>

      {/* Comment Content */}
      <p className="dark:text-zinc-400">{content}</p>

      <div className="flex justify-between">
        {" "}
        <button className="text-teal-500 font-medium text-sm flex items-center gap-1">
          {" "}
          Über Comment
          <SiReactos />
        </button>
        {/* date */}
        <div className="dark:text-zinc-400"> {commentDate} </div>
      </div>
    </div>
  );
};

export default ArticleComment;
