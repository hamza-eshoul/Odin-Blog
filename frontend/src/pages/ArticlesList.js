import { useEffect, useState } from "react";
import { useFetch } from "../hooks/useFetch";

// components
import ArticleCard from "../components/ArticleCard";
import Loading from "../components/Loading";
import Error from "../components/Error";

const ArticlesList = () => {
  const [isCardStacked, setIsCardStacked] = useState(false);

  const articles_list_url = "https://odin-blog-api-rezs.onrender.com/articles";

  const { error, isPending, data: articles } = useFetch(articles_list_url);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth <= "768") {
        setIsCardStacked(true);
      } else {
        setIsCardStacked(false);
      }
    });
  }, []);

  return (
    <main className="relative mx-auto max-w-7xl">
      <section className="mx-auto my-28 flex max-w-3xl flex-col gap-6  dark:border-zinc-800/90 dark:bg-zinc-900 sm:px-10 lg:mx-0 lg:max-w-5xl lg:px-24">
        {/* Title*/}
        <h1 className="px-4 text-4xl font-bold dark:text-white sm:px-0 sm:text-5xl">
          {" "}
          Writing on programming, philosophy, and the self-overcoming concept.
        </h1>

        {/* Introduction */}
        <p className="px-4 text-justify leading-7 text-zinc-600/90 dark:text-zinc-400 sm:px-0">
          All of my long-form thoughts on programming, philosophy, and more,
          collected in chronological order.
        </p>

        {/* Articles List */}
        <section className="border-zinc-100 dark:border-zinc-800/90 md:border-l-[1px]">
          {error && <Error error={error} errorHeight={"h-[80vh]"} />}
          {isPending && (
            <Loading
              loadingColor={"teal"}
              loadingSize={50}
              loadingHeight={"h-[80vh]"}
            />
          )}
          {articles &&
            articles.map((article) => (
              <ArticleCard
                key={article._id}
                title={article.title}
                introduction={article.introduction}
                date={article.createdAt}
                articleId={article._id}
                isStacked={isCardStacked}
              />
            ))}
        </section>
      </section>
    </main>
  );
};

export default ArticlesList;
