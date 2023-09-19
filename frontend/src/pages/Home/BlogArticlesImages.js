import { useFetch } from "../../hooks/useFetch";

// components
import ArticleImage from "./ArticleImage";
import Loading from "../../components/Loading";
import Error from "../../components/Error";

const rotateDegrees = {
  rotate1: "rotate-3",
  rotate2: "-rotate-3",
  rotate3: "rotate-2",
  rotate4: "rotate-2",
  rotate5: "-rotate-3",
};

const BlogArticlesImages = () => {
  const blog_articles_url =
    "https://odin-blog-api-rezs.onrender.com/articles/five_articles";

  const { error, isPending, data: blogArticles } = useFetch(blog_articles_url);

  if (isPending) {
    return (
      <div className="my-20">
        <Loading
          loadingColor={"teal"}
          loadingSize={50}
          loadingHeight={"h-full"}
        />
      </div>
    );
  }
  if (error) {
    return (
      <div className="my-20">
        <Error error={error} errorHeight={"h-full"} />
      </div>
    );
  }

  return (
    <section className="mx-auto my-20 flex justify-center gap-8 sm:w-[1600px]">
      {blogArticles &&
        blogArticles.map((blogArticle) => (
          <ArticleImage
            key={blogArticle._id}
            articleId={blogArticle._id}
            article_image={blogArticle.image}
            rotateDegrees={rotateDegrees}
          />
        ))}
    </section>
  );
};

export default BlogArticlesImages;
