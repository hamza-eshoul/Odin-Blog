import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PresentationSection from "../components/PresentationSection";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";
import ShowcaseBlog from "../components/ShowcaseBlog";

const Homepage = () => {
  const [articles, setArticles] = useState([]);
  const [showcaseBlogs, setShowcaseBlogs] = useState([]);
  const [rotateDegrees, setRotateDegrees] = useState({
    rotate1: "rotate-3",
    rotate2: "-rotate-3",
    rotate3: "rotate-2",
    rotate4: "rotate-2",
    rotate5: "-rotate-3",
  });

  useEffect(() => {
    const fetchThreeFirstArticles = async () => {
      const response = await fetch(
        "http://localhost:4000/articles/three_first_articles"
      );
      const json = await response.json();

      if (response.ok) {
        setArticles(json);
      }
    };

    fetchThreeFirstArticles();
  }, []);

  useEffect(() => {
    const fechFiveArticles = async () => {
      const response = await fetch(
        "http://localhost:4000/articles/five_articles"
      );
      const json = await response.json();

      if (response.ok) {
        setShowcaseBlogs(json);
      }
    };

    fechFiveArticles();
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
              articleId={article._id}
            />
          ))}
        </section>
        <Footer />
      </main>{" "}
      <div className="flex gap-8 justify-center absolute top-[550px] w-full">
        {showcaseBlogs.map((blogArticle) => (
          <ShowcaseBlog
            key={blogArticle._id}
            articleId={blogArticle._id}
            articleImage={blogArticle.image}
            rotateDegrees={rotateDegrees}
          />
        ))}
      </div>
    </div>
  );
};

export default Homepage;
