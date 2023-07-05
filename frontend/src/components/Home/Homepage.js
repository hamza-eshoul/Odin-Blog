import React, { useEffect, useState } from "react";
import Navbar from "../Meta/Navbar";
import PresentationSection from "./homeComponents/PresentationSection";
import ShowcaseBlogs from "./homeComponents/ShowcaseBlogs";
import BlogCards from "./homeComponents/BlogCards";
import Footer from "../Meta/Footer";

const Homepage = ({ setArticle }) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    const fetchArticles = async () => {
      const response = await fetch(
        "http://localhost:4000/articles/three_first_articles"
      );
      const json = await response.json();

      if (response.ok) {
        setArticles(json);
      }
    };

    fetchArticles();
  }, []);

  return (
    <div className="relative">
      <main className="max-w-6xl mx-auto bg-white h-full shadow-sm border-[1px] border-zinc-800/5 pt-6 ">
        <Navbar />
        <PresentationSection />
        <section className=" mx-12 flex flex-col gap-4 ">
          {articles.map((article) => (
            <BlogCards
              key={article._id}
              title={article.title}
              introduction={article.introduction}
              date={article.createdAt}
              content={article.content}
              image={article.image}
              setArticle={setArticle}
            />
          ))}
        </section>
        <Footer />
      </main>{" "}
      <ShowcaseBlogs />
    </div>
  );
};

export default Homepage;
