import React, { useEffect, useState } from "react";
import Navbar from "../Meta/Navbar";
import Footer from "../Meta/Footer";
import testArticleImg from "../../images/test-img.jpg";
import problemSolving from "../../images/problemSolving.jpg";
import devLearning from "../../images/devLearning.jpg";
import { FaArrowLeft } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Article = ({ article }) => {
  const [articleImage, setArticleImage] = useState("");

  useEffect(() => {
    if (article.image == "problemSolving") {
      setArticleImage(problemSolving);
    } else if (article.image == "devLearning") {
      setArticleImage(devLearning);
    }
  }, [article.image]);

  const [splitArticle, setSplitArticle] = useState([]);
  useEffect(() => {
    const splitArticleContent = () => {
      // get the article content value
      const articleContent = article.content;
      // split the article content
      const splitArticle = articleContent.split("*");
      // update the split article state
      setSplitArticle(splitArticle);
    };

    splitArticleContent();
  }, [article.content]);

  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative">
      <Navbar />

      <section className="w-3/5 mx-auto my-32 flex flex-col gap-9 ">
        {/* Get Back Icon */}
        <Link to="/" className="absolute top-[185px] left-20 nav-border p-3">
          <FaArrowLeft className="text-zinc-500 hover:text-zinc-600 transition transition-duration-300 text-sm cursor-pointer " />
        </Link>
        {/* Date */}
        <div className="flex gap-3 items-center">
          <span className="w-[2.5px] h-[16px] bg-zinc-200"></span>
          <div className="text-zinc-400"> {article.formattedDate}</div>
        </div>

        {/* Title */}
        <h1 className="text-5xl font-bold"> {article.title} </h1>

        {/* Introduction */}
        <p className="text-zinc-700/90 leading-7 text-justify">
          {article.introduction}
        </p>

        {/* Article Image */}
        <div className="h-96 mb-10 ">
          <img
            src={articleImage}
            alt=""
            className="h-full w-full object-cover rounded-xl"
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
