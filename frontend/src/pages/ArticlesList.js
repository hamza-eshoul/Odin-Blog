import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";
import { FaArrowLeft } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const ArticlesList = () => {
  // state
  const [articles, setArticles] = useState([]);

  // hooks
  const navigate = useNavigate();

  // fetch all articles
  useEffect(() => {
    const fetchAllArticles = async () => {
      const response = await fetch("http://localhost:4000/articles");
      const json = await response.json();

      if (response.ok) {
        console.log(json);
        setArticles(json);
      }
    };

    fetchAllArticles();
  }, []);

  // functions
  const navigateBack = () => {
    navigate(-1);
  };

  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative dark:bg-zinc-900 dark:border-zinc-800/90">
      <Navbar />
      {/* Arrow */}
      <div
        className="w-9 h-9 border-[1px] border-zinc-200 rounded-full flex justify-center items-center absolute top-[335px] left-[50px] dark:border-zinc-600"
        onClick={navigateBack}
      >
        {" "}
        <FaArrowLeft className="text-zinc-500 hover:text-zinc-700 cursor-pointer dark:hover:text-teal-500" />
      </div>
      <section className="w-[75%] pl-32 bg-white my-28 flex flex-col gap-6  dark:bg-zinc-900 dark:border-zinc-800/90">
        {/* Title*/}
        <h1 className="text-5xl font-bold dark:text-white">
          {" "}
          Writing on programming, philosophy, and the self-overcoming concept.
        </h1>

        {/* Introduction */}
        <p className="text-zinc-600/90 leading-7 text-justify dark:text-zinc-400">
          All of my long-form thoughts on programming, philosophy, and more,
          collected in chronological order.
        </p>

        {/* Articles List */}
        <div className="border-l-[1px] border-zinc-100 dark:border-zinc-800/90">
          {articles.map((article) => (
            <ArticleCard
              key={article._id}
              title={article.title}
              introduction={article.introduction}
              date={article.createdAt}
              articleId={article._id}
            />
          ))}
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default ArticlesList;
