import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import problemSolving from "../images/problemSolving.jpg";
import devLearning from "../images/devLearning.jpg";
import snowBall from "../images/snowBall.jpg";
import learningAssets from "../images/learningAssets.webp";
import developerMindset from "../images/devMindset.webp";
import { FaArrowLeft } from "react-icons/fa6";
import { Link, useNavigate } from "react-router-dom";
import { useArticleContext } from "../hooks/useArticleContext";
import ArticleComment from "../components/ArticleComment";
import { useAuthContext } from "../hooks/useAuthContext";
import { RxCross1 } from "react-icons/rx";
import { useAddComment } from "../hooks/useAddComment";

const Article = () => {
  // state
  const { state, formatDate } = useArticleContext();
  const [currentArticle, setCurrentArticle] = useState({});
  const [articleImage, setArticleImage] = useState("");
  const [splitArticle, setSplitArticle] = useState([]);
  const [articleFormatDate, setArticleFormatDate] = useState();
  const [articleComments, setArticleComments] = useState([]);
  const [isAddCommentActive, setIsAddCommentActive] = useState(false);
  const [addCommentContent, setAddCommentContent] = useState("");
  const [addCommentError, setAddCommentError] = useState("");

  // hooks
  const navigate = useNavigate();
  const { user } = useAuthContext();
  const { addComment } = useAddComment();

  // fetch article data
  useEffect(() => {
    const fetchArticle = async () => {
      const response = await fetch(
        `http://localhost:4000/articles/${state.articleId}`
      );
      const json = await response.json();

      if (response.ok) {
        setCurrentArticle(json);
        splitArticleContent(json.content);
        formatArticleDate(json.createdAt);
        setArticleComments(json.comments);
      }
    };

    fetchArticle();
  }, []);

  // set article image
  useEffect(() => {
    if (currentArticle.image === "problemSolving") {
      setArticleImage(problemSolving);
    } else if (currentArticle.image === "devLearning") {
      setArticleImage(devLearning);
    } else if (currentArticle.image === "snowBall") {
      setArticleImage(snowBall);
    } else if (currentArticle.image === "developerAssets") {
      setArticleImage(learningAssets);
    } else if (currentArticle.image === "developerMindset") {
      setArticleImage(developerMindset);
    }
  }, [currentArticle]);

  // functions
  const splitArticleContent = (content) => {
    // split the article content
    const splitArticle = content.split("*");
    // update the split article state
    setSplitArticle(splitArticle);
  };

  const formatArticleDate = (date) => {
    const formatResult = formatDate(date);
    setArticleFormatDate(formatResult);
  };

  const handleCommentSubmit = async (e) => {
    e.preventDefault();

    // validate form content
    if (addCommentContent === "") {
      setAddCommentError("The comment content must be filled ! ");
      return;
    }

    const username = user.user.username;
    const articleId = currentArticle._id;

    console.log(username, addCommentContent, articleId);

    const json = await addComment(username, addCommentContent, articleId);

    setArticleComments(json.comments);
    setIsAddCommentActive(false);
    setAddCommentContent("");
    setAddCommentError("");
  };

  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative dark:bg-zinc-900 dark:border-zinc-800/90 ">
      <Navbar />

      <section className="w-3/5 mx-auto my-32 flex flex-col gap-9 ">
        {/* Go Back Icon */}
        <button
          className="absolute top-[185px] left-20 nav-border p-3"
          onClick={() => navigate(-1)}
        >
          <FaArrowLeft className="text-zinc-500 hover:text-zinc-600 transition transition-duration-300 text-sm cursor-pointer " />
        </button>
        {/* Date */}
        <div className="flex gap-3 items-center">
          <span className="w-[2.5px] h-[16px] bg-zinc-200 dark:bg-zinc-600"></span>
          <div className="text-zinc-400 dark:text-zinc-500">
            {articleFormatDate}
          </div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold dark:text-white">
          {currentArticle.title}
        </h1>

        {/* Introduction */}
        <p className="text-zinc-700/90 leading-7 text-justify dark:text-zinc-400">
          {currentArticle.introduction}
        </p>

        {/* Article Image */}
        <div className="h-96 mb-10 ">
          <img
            src={articleImage}
            alt=""
            className="h-full w-full object-fit rounded-xl"
          />
        </div>

        {/* Article Content */}
        {splitArticle.map((articleChunk) => (
          <p className="text-zinc-900 leading-7 text-justify dark:text-white/90400/80">
            {articleChunk}
          </p>
        ))}

        {/* Article Comments Section */}
        <div className="flex flex-col items-center mt-10">
          {/* Title && Add Comment */}

          <h1 className="text-2xl font-semibold dark:text-white">
            {" "}
            Article's Comments :{" "}
          </h1>

          {/* Comments */}
          <div className="flex flex-col gap-6 w-full pt-6 ">
            {articleComments.length === 0 ? (
              <div className="text-lg text-center dark:text-white">
                {" "}
                There are no comments yet ...
              </div>
            ) : (
              articleComments.map((comment) => (
                <ArticleComment
                  key={comment._id}
                  author={comment.author}
                  content={comment.content}
                  date={comment.createdAt}
                />
              ))
            )}
          </div>

          {user ? (
            <button
              className="nav-border p-3 bg-teal-500 text-white hover:bg-teal-600 transition transition-duration-300 font-semibold rounded-xl mt-10 dark:text-zinc-800 dark:bg-teal-400"
              onClick={() => setIsAddCommentActive(true)}
            >
              Add A Comment
            </button>
          ) : (
            <div className="mt-10 dark:text-white">
              {" "}
              To submit a comment, please{" "}
              <Link to="/login" className="text-teal-500 font-semibold">
                Log In
              </Link>{" "}
              or{" "}
              <Link to="/signup" className="text-teal-500 font-semibold">
                Sign Up
              </Link>{" "}
            </div>
          )}

          {isAddCommentActive ? (
            <form
              className="flex flex-col gap-6 border-[1px] border-zinc-200 rounded-lg p-8 bg-zinc-50/20 mt-6 w-2/3 dark:border-zinc-600 dark:bg-zinc-800/90"
              onSubmit={handleCommentSubmit}
            >
              <div className="flex justify-between items-center">
                <label className="text-xl font-semibold dark:text-white">
                  {" "}
                  Comment Content :{" "}
                </label>
                <div className="nav-border p-3 cursor-pointer group">
                  <RxCross1
                    className="text-zinc-500 group-hover:text-teal-600 transition transition-duration-300 text-sm cursor-pointer dark:text-white  "
                    onClick={() => {
                      setAddCommentContent("");
                      setIsAddCommentActive(false);
                      setAddCommentError("");
                    }}
                  />
                </div>
              </div>
              <textarea
                id=""
                cols="30"
                rows="10"
                placeholder="Your comment ..."
                value={addCommentContent}
                onChange={(e) => {
                  setAddCommentContent(e.target.value);
                }}
                className="outline-teal-500 shadow-xl bg-white p-3 resize-none"
              />{" "}
              <button className="nav-border p-2 bg-teal-500 text-white hover:bg-teal-600 transition transition-duration-300 font-semibold rounded-xl dark:text-zinc-800 dark:bg-teal-400">
                {" "}
                Post Comment{" "}
              </button>
              {addCommentError !== "" ? (
                <div className="text-red-500 font-semibold text-center">
                  {addCommentError}
                </div>
              ) : (
                ""
              )}
            </form>
          ) : (
            ""
          )}
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Article;
