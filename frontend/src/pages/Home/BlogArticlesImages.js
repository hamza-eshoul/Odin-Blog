import { useFetch } from "../../hooks/useFetch";

// components
import ArticleImage from "./ArticleImage";

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

  return (
    <div className="flex gap-8 justify-center absolute top-[550px] w-full">
      {error && <p className="error"> {error}</p>}
      {isPending && <p className="loading">Loading...</p>}
      {blogArticles &&
        blogArticles.map((blogArticle) => (
          <ArticleImage
            key={blogArticle._id}
            articleId={blogArticle._id}
            article_image={blogArticle.image}
            rotateDegrees={rotateDegrees}
          />
        ))}
    </div>
  );
};

export default BlogArticlesImages;
