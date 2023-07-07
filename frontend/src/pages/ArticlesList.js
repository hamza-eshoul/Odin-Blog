import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ArticleCard from "../components/ArticleCard";

const ArticlesList = () => {
  const [articles, setArticles] = useState([]);

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
  return (
    <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 relative">
      <Navbar />

      <section className="w-[75%] pl-24 bg-white my-24 flex flex-col gap-6  ">
        {/* Title*/}
        <h1 className="text-5xl font-bold">
          {" "}
          Writing on programming, philosophy, and the self-overcoming concept.
        </h1>

        {/* Introduction */}
        <p className="text-zinc-600/90 leading-7 text-justify">
          All of my long-form thoughts on programming, philosophy, and more,
          collected in chronological order.
        </p>

        {/* Articles List */}
        <div className="border-l-[1px] border-zinc-100">
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
