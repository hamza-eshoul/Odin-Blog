import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import PresentationSection from "../components/PresentationSection";
import BlogCards from "../components/BlogCards";
import Footer from "../components/Footer";
import ShowcaseBlog from "../components/ShowcaseBlog";
import { GoMail } from "react-icons/go";
import { MdWorkOutline } from "react-icons/md";
import WorkExperience from "../components/WorkExperience";
import { ReactComponent as PlaneteriaLogo } from "../svg/Planetaria.svg";
import { ReactComponent as AirbnbLogo } from "../svg/Airbnb.svg";
import { ReactComponent as FacebookLogo } from "../svg/Facebook.svg";
import { ReactComponent as StarbucksLogo } from "../svg/Starbucks.svg";

const Homepage = () => {
  // state
  const [articles, setArticles] = useState([]);
  const [showcaseBlogs, setShowcaseBlogs] = useState([]);
  const [rotateDegrees, setRotateDegrees] = useState({
    rotate1: "rotate-3",
    rotate2: "-rotate-3",
    rotate3: "rotate-2",
    rotate4: "rotate-2",
    rotate5: "-rotate-3",
  });

  // hooks

  // fetch three first articles
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

  // fetch five articles
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
      <main className="max-w-6xl mx-auto bg-white  h-full shadow-sm border-[1px] border-zinc-800/5 dark:bg-zinc-900 dark:border-zinc-800/90 pt-6 ">
        <Navbar />
        <PresentationSection />
        <section className=" mx-12 flex gap-10">
          {/* Blog Cards */}
          <div className="flex flex-col gap-4 w-[60%]">
            {articles.map((article) => (
              <BlogCards
                key={article._id}
                title={article.title}
                introduction={article.introduction}
                date={article.createdAt}
                articleId={article._id}
              />
            ))}
          </div>

          {/* Mock Emailing && Work Experience */}
          <div className="flex flex-col gap-4 mt-4">
            {/* Mock Emailing */}
            <div className="border-[1px] border-zinc-100 rounded-xl flex flex-col gap-3 p-6 dark:border-zinc-700 ">
              <div className="flex gap-3 items-center">
                <GoMail className="text-xl text-zinc-600" />
                <h2 className="text-sm font-semibold dark:text-white">
                  {" "}
                  Stay up to date
                </h2>
              </div>

              <p className="text-zinc-600 text-sm dark:text-zinc-400 ">
                {" "}
                Get notified when I publish something new, and unsubscribe at
                any time.
              </p>
              <div className="flex gap-3">
                <input
                  type="text"
                  placeholder="Email address"
                  className="border-[1px] border-zinc-100 dark:border-zinc-600 rounded-md shadow-sm p-2 text-sm w-[90%] outline-teal-500 dark:bg-zinc-800 dark:text-zinc-600 dark:outline-teal-400 outline-offset-0"
                />
                <button className="px-3 py-2.5 bg-black text-white text-center text-sm rounded-lg hover:bg-black/70 transition ">
                  {" "}
                  Join{" "}
                </button>
              </div>
            </div>
            {/* Work Experience */}
            <div className="border-[1px] border-zinc-100 rounded-xl flex flex-col gap-3 p-6 mt-6 dark:border-zinc-700">
              <div className="flex gap-3 items-center">
                <MdWorkOutline className="text-xl text-zinc-600" />
                <h2 className="text-sm font-semibold dark:text-white"> Work</h2>
              </div>

              <div className="flex flex-col gap-6">
                {" "}
                <WorkExperience
                  workTitle="Planeteria"
                  workPosition="CEO"
                  workDate="2019 — Present"
                  svgLogo={<PlaneteriaLogo />}
                />
                <WorkExperience
                  workTitle="Airbnb"
                  workPosition="Product Designer"
                  workDate="2014 — 2019"
                  svgLogo={<AirbnbLogo />}
                />
                <WorkExperience
                  workTitle="Facebook"
                  workPosition="iOS Software engineerr"
                  workDate="2011 — 2014"
                  svgLogo={<FacebookLogo />}
                />
                <WorkExperience
                  workTitle="Starbucks"
                  workPosition="Shift Supervisor"
                  workDate="2008 — 2011"
                  svgLogo={<StarbucksLogo />}
                />
              </div>

              <button className="text-sm bg-zinc-100/50 hover:bg-zinc-100 transition p-3 rounded-lg dark:text-white dark:bg-zinc-800/90 dark:hover:bg-zinc-800">
                {" "}
                Download CV
              </button>
            </div>
          </div>
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
