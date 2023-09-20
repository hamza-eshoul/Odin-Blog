// components
import PresentationSection from "./PresentationSection";
import HomepageBody from "./HomepageBody";
import BlogArticlesImages from "./BlogArticlesImages";

const Homepage = () => {
  return (
    <main className="relative flex w-full flex-col overflow-x-hidden">
      <PresentationSection />
      <BlogArticlesImages />
      <HomepageBody />
    </main>
  );
};

export default Homepage;
