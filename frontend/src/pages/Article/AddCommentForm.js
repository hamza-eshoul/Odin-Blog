import { useState } from "react";
import { useAddComment } from "../../hooks/useAddComment";

// icons
import { RxCross1 } from "react-icons/rx";

// components
import Error from "../../components/Error";

const AddCommentForm = ({
  setIsAddComment,
  setArticleComments,
  user,
  articleId,
}) => {
  const [commentContent, setCommentContent] = useState("");

  const { addComment, error, setError, isPending } = useAddComment();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (commentContent === "") {
      setError("The comment content must be filled ! ");
      return;
    }

    const username = user.user.username;

    const data = await addComment(username, commentContent, articleId);

    setArticleComments(data.comments);
    setIsAddComment(null);
    setCommentContent("");
  };

  return (
    <form
      className="mx-4 mt-6 flex  flex-col gap-6 rounded-lg border-[1px] border-zinc-200 bg-zinc-50/20 p-5 dark:border-zinc-600 dark:bg-zinc-800/90 sm:px-14"
      onSubmit={handleSubmit}
    >
      {/* Form Header */}
      <div className="flex items-center justify-between">
        <span className="text-xl font-semibold dark:text-white">
          {" "}
          Comment Content :{" "}
        </span>
        <div
          className="nav-border group cursor-pointer p-3"
          onClick={() => {
            setIsAddComment(null);
            setCommentContent("");
            setError("");
          }}
        >
          <RxCross1 className="transition-duration-300 text-sm text-zinc-500 transition group-hover:text-teal-600 dark:text-white  " />
        </div>
      </div>
      {/* Form Content */}
      <textarea
        id=""
        cols="30"
        rows="10"
        placeholder="Your comment ..."
        value={commentContent}
        onChange={(e) => {
          setCommentContent(e.target.value);
        }}
        className="resize-none bg-white p-3 shadow-xl outline-teal-500"
      />{" "}
      <button className="nav-border transition-duration-300 rounded-xl bg-teal-500 p-2 font-semibold text-white transition hover:bg-teal-600 dark:bg-teal-400 dark:text-zinc-800">
        {isPending && "Posting comment..."}
        {!isPending && "Post Comment"}
      </button>
      {error && (
        <div className="max-w-[300px]">
          {" "}
          <Error error={error} />{" "}
        </div>
      )}
    </form>
  );
};

export default AddCommentForm;
