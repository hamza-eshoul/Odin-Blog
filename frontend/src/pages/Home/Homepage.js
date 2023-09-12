// components
import Navbar from "../../components/Navbar";
import Footer from "../../components/Footer";
import PresentationSection from "./PresentationSection";
import HomepageBody from "./HomepageBody";
import BlogArticlesImages from "./BlogArticlesImages";

const Homepage = () => {
  return (
    <div className="relative">
      <main className="max-w-6xl mx-auto bg-white  h-full shadow-sm border-[1px] border-zinc-800/5 dark:bg-zinc-900 dark:border-zinc-800/90 pt-6 ">
        <Navbar />
        <PresentationSection />
        <HomepageBody />
        <Footer />
      </main>{" "}
      <BlogArticlesImages />
    </div>
  );
};

export default Homepage;
