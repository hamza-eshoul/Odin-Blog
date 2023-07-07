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

const Article = () => {
  const { state, formatDate } = useArticleContext();
  const [currentArticle, setCurrentArticle] = useState({});
  const [articleImage, setArticleImage] = useState("");
  const [splitArticle, setSplitArticle] = useState([]);
  const [articleFormatDate, setArticleFormatDate] = useState();

  const navigate = useNavigate();

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
      }
    };

    fetchArticle();
  }, []);

  // set article image
  useEffect(() => {
    if (currentArticle.image == "problemSolving") {
      setArticleImage(problemSolving);
    } else if (currentArticle.image == "devLearning") {
      setArticleImage(devLearning);
    } else if (currentArticle.image == "snowBall") {
      setArticleImage(snowBall);
    } else if (currentArticle.image == "developerAssets") {
      setArticleImage(learningAssets);
    } else if (currentArticle.image == "developerMindset") {
      setArticleImage(developerMindset);
    }
  }, [currentArticle]);

  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative">
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
          <span className="w-[2.5px] h-[16px] bg-zinc-200"></span>
          <div className="text-zinc-400">{articleFormatDate}</div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold">{currentArticle.title}</h1>

        {/* Introduction */}
        <p className="text-zinc-700/90 leading-7 text-justify">
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
          <p className="text-zinc-900 leading-7 text-justify">{articleChunk}</p>
        ))}
      </section>

      <Footer />
    </main>
  );
};

export default Article;
