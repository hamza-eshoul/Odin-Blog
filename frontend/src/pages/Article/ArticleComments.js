import { useState, useEffect } from "react";
import { useAuthContext } from "../../hooks/useAuthContext";
import { Link } from "react-router-dom";

// components
import Comment from "./Comment";
import AddCommentForm from "./AddCommentForm";

const ArticleComments = ({ article }) => {
  const [articleComments, setArticleComments] = useState([]);
  const [isAddComment, setIsAddComment] = useState(null);

  const { user } = useAuthContext();

  useEffect(() => {
    if (article) {
      setArticleComments(article.comments);
    }
  }, [article]);

  return (
    <section className="mx-auto my-32 mt-10  flex max-w-2xl flex-col  items-center gap-9 px-4 sm:px-8">
      <h2 className="text-2xl font-semibold dark:text-white">
        {" "}
        Article's Comments :{" "}
      </h2>
      {/* Comments */}
      <div className="flex w-full flex-col gap-6 ">
        {articleComments.length === 0 && (
          <div className="text-center text-lg dark:text-white">
            {" "}
            There are no comments yet ...
          </div>
        )}
        {articleComments.length !== 0 &&
          articleComments.map((comment) => (
            <Comment
              key={comment._id}
              author={comment.author}
              content={comment.content}
              date={comment.createdAt}
              commentId={comment._id}
              article={article}
              setArticleComments={setArticleComments}
            />
          ))}
      </div>
      {user && (
        <button
          className="nav-border transition-duration-300 mt-10 rounded-xl bg-teal-500 p-3 font-semibold text-white transition hover:bg-teal-600 dark:bg-teal-400 dark:text-zinc-800"
          onClick={() => setIsAddComment(true)}
        >
          Add A Comment
        </button>
      )}
      {!user && (
        <p className="mt-10 text-center dark:text-white">
          {" "}
          To submit a comment, please{" "}
          <Link to="/login" className="font-semibold text-teal-500">
            Log In
          </Link>{" "}
          or{" "}
          <Link to="/signup" className="font-semibold text-teal-500">
            Sign Up
          </Link>{" "}
        </p>
      )}

      {isAddComment && (
        <AddCommentForm
          setIsAddComment={setIsAddComment}
          setArticleComments={setArticleComments}
          user={user}
          articleId={article._id}
        />
      )}
    </section>
  );
};

export default ArticleComments;
