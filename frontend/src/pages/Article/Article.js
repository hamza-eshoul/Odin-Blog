import { useEffect, useState } from "react";
import { useFetch } from "../../hooks/useFetch";
import { useParams } from "react-router-dom";

// images
import problemSolving from "../../assets/images/problemSolving.jpg";
import devLearning from "../../assets/images/devLearning.jpg";
import snowBall from "../../assets/images/snowBall.jpg";
import learningAssets from "../../assets/images/learningAssets.webp";
import developerMindset from "../../assets/images/devMindset.webp";

// utils
import formatDate from "../../utility/formatDate";

// components
import ArticleComments from "./ArticleComments";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const Article = () => {
  const [articleImage, setArticleImage] = useState(null);
  const [splitArticle, setSplitArticle] = useState([]);
  const [articleFormatDate, setArticleFormatDate] = useState(null);
  const { id } = useParams();

  const article_url = `https://odin-blog-api-rezs.onrender.com/articles/${id}`;

  const { error, isPending, data: article } = useFetch(article_url);

  useEffect(() => {
    if (article) {
      setSplitArticle(article.content.split("*"));
      setArticleFormatDate(formatDate(article.createdAt));
    }
  }, [article]);

  useEffect(() => {
    if (article) {
      if (article.image === "problemSolving") {
        setArticleImage(problemSolving);
      }
      if (article.image === "devLearning") {
        setArticleImage(devLearning);
      }
      if (article.image === "snowBall") {
        setArticleImage(snowBall);
      }
      if (article.image === "developerAssets") {
        setArticleImage(learningAssets);
      }
      if (article.image === "developerMindset") {
        setArticleImage(developerMindset);
      }
    }
  }, [article]);

  return (
    <main className="relative mx-auto max-w-7xl">
      {error && <Error error={error} errorHeight={"h-screen"} />}
      {isPending && (
        <Loading
          loadingColor={"teal"}
          loadingSize={50}
          loadingHeight={"h-screen"}
        />
      )}
      {article && (
        <>
          <article className="mx-auto my-32 flex max-w-2xl flex-col gap-9 px-4 sm:px-8">
            {/* Article Date */}
            <div className="flex items-center gap-3">
              <span className="h-[16px] w-[2.5px] bg-zinc-200 dark:bg-zinc-600"></span>
              <span className="text-zinc-400 dark:text-zinc-500">
                {articleFormatDate}
              </span>
            </div>

            {/* Article Title */}
            <h1 className="text-4xl font-bold dark:text-white sm:text-5xl">
              {article.title}
            </h1>

            {/* Article Introduction */}
            <p className="text-justify leading-7 text-zinc-700/90 dark:text-zinc-400">
              {article.introduction}
            </p>

            {/* Article Image */}
            <div className="mb-10 h-96 ">
              <img
                src={articleImage}
                alt="article image"
                className="object-fit h-full w-full rounded-xl"
              />
            </div>

            {/* Article Content */}
            {splitArticle.map((articleChunk) => (
              <p
                key={articleChunk}
                className="dark:text-white/90400/80 text-justify leading-7 text-zinc-900 dark:text-zinc-400"
              >
                {articleChunk}
              </p>
            ))}
          </article>
          <ArticleComments article={article} />
        </>
      )}
    </main>
  );
};

export default Article;
