import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

// components
import MockEmailing from "../../components/MockEmailing";
import WorkExperience from "../../components/WorkExperience";
import Toast from "../../components/Toast";
import ArticleCard from "../../components/ArticleCard";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const HomepageBody = () => {
  const [toastNotification, setToastNotification] = useState(null);

  const three_first_articles_url =
    "https://odin-blog-api-rezs.onrender.com/articles/three_first_articles";

  const {
    error,
    isPending,
    data: three_first_articles,
  } = useFetch(three_first_articles_url);

  const toggleToastNotification = () => {
    setToastNotification(true);

    setTimeout(() => {
      setToastNotification(null);
    }, 5000);
  };
  return (
    <section className="mx-auto w-full max-w-7xl gap-10 sm:px-28 lg:px-0">
      <div className="flex flex-col gap-16 lg:flex-row lg:px-24 ">
        {/* Blog Cards */}
        <section className="flex flex-col gap-4 lg:w-[55%]">
          {error && <Error error={error} errorHeight={"h-full"} />}
          {isPending && (
            <Loading
              loadingColor={"teal"}
              loadingSize={50}
              loadingHeight={"h-full"}
            />
          )}
          {three_first_articles &&
            three_first_articles.map((article) => (
              <ArticleCard
                key={article._id}
                title={article.title}
                introduction={article.introduction}
                date={article.createdAt}
                articleId={article._id}
                isStacked={true}
              />
            ))}
        </section>

        {/* Mock Emailing && Work Experience */}
        <section className="mt-4 flex flex-col gap-4 px-6 lg:w-[45%]">
          <MockEmailing toggleToastNotification={toggleToastNotification} />
          <WorkExperience toggleToastNotification={toggleToastNotification} />
        </section>

        <Toast
          bgColor={"bg-teal-500"}
          textColor={"text-zinc-100"}
          elementType={"button"}
          toastNotification={toastNotification}
          setToastNotification={setToastNotification}
        />
      </div>
    </section>
  );
};

export default HomepageBody;
