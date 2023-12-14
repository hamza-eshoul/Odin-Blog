import { useEffect, useState } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";

// utils
import formatDate from "../../utility/formatDate";

// icons
import { SiReactos } from "react-icons/si";
import { MdDeleteForever } from "react-icons/md";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Comment = ({
  author,
  content,
  date,
  commentId,
  article,
  setArticleComments,
}) => {
  const [commentDate, setCommentDate] = useState("");
  const { user } = useAuthContext();
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    formatCommentDate(date);
  }, [date]);

  const formatCommentDate = (date) => {
    const formatResult = formatDate(date);
    setCommentDate(formatResult);
  };

  const deleteComment = async () => {
    setError(null);
    setIsPending(true);

    const article_id = article._id;
    const articleComments = article.comments;
    try {
      const res = await fetch(
        `https://odin-blog-api-rezs.onrender.com/articles/${article_id}/comments`,
        {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ articleComments, commentId }),
        },
      );

      if (!res.ok) {
        throw new Error(res.statusText);
      }

      const json = await res.json();
      setIsPending(false);
      setArticleComments(json.comments);
      setError(null);
    } catch (err) {
      setError("Could not delete the comment");
    }
  };

  return (
    <article className="transition-duration-300 flex flex-col gap-3 rounded-lg border-b-[1px] border-zinc-200/80 p-6 transition hover:bg-teal-50/70 dark:border-zinc-700 dark:hover:bg-zinc-800/50">
      {/* Comment Author  */}
      <div className="flex items-center justify-between gap-3">
        <span className="font-semibold dark:text-white">{author}</span>
        {(!user || (user && user.user.username !== author)) && (
          <div
            className={`transition-duration-300 group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-200 transition hover:scale-125 hover:bg-teal-500 dark:border-zinc-600`}
          >
            <SiReactos className="text-xl text-teal-600 group-hover:text-white" />
          </div>
        )}
        {user && user.user.username == author && (
          <>
            {error && <Error error={error} />}
            {!error && (
              <div
                className={`transition-duration-300 group flex h-8 w-8 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-200 transition hover:scale-125 hover:bg-teal-500 dark:border-zinc-600`}
                onClick={deleteComment}
              >
                {isPending && (
                  <Loading loadingColor={"teal"} loadingSize={20} />
                )}

                {!isPending && !error && (
                  <MdDeleteForever className="text-xl text-teal-600 group-hover:text-white" />
                )}
              </div>
            )}
          </>
        )}
      </div>

      {/* Comment Content */}
      <p className="dark:text-zinc-400">{content}</p>

      <div className="flex justify-between">
        {" "}
        <div className="hidden items-center gap-1 text-sm font-medium text-teal-500 sm:flex">
          {" "}
          Über Comment
          <SiReactos />
        </div>
        {/* date */}
        <span className="text-teal-500 dark:text-zinc-400">
          {" "}
          {commentDate}{" "}
        </span>
      </div>
    </article>
  );
};

export default Comment;
