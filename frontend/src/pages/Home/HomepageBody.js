import { useFetch } from "../../hooks/useFetch";
import { useState } from "react";

// components
import BlogCards from "../../components/BlogCards";
import MockEmailing from "../../components/MockEmailing";
import WorkExperience from "../../components/WorkExperience";
import Toast from "../../components/Toast";

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
    <section className=" mx-12 flex gap-10">
      {/* Blog Cards */}
      <div className="flex flex-col gap-4 w-[60%]">
        {error && <p className="error">{error}</p>}
        {isPending && <p className="loading">Loading...</p>}
        {three_first_articles &&
          three_first_articles.map((article) => (
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
        <MockEmailing toggleToastNotification={toggleToastNotification} />
        <WorkExperience toggleToastNotification={toggleToastNotification} />
      </div>

      <Toast
        bgColor={"bg-teal-500"}
        textColor={"text-zinc-100"}
        elementType={"button"}
        toastNotification={toastNotification}
        setToastNotification={setToastNotification}
      />
    </section>
  );
};

export default HomepageBody;
