import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// images
import devLearning from "../../assets/images/devLearning.jpg";
import snowBall from "../../assets/images/snowBall.jpg";
import learningAssets from "../../assets/images/learningAssets.webp";
import developerMindset from "../../assets/images/devMindset.webp";
import problemSolving from "../../assets/images/problemSolving.jpg";

const ArticleImage = ({ articleId, article_image, rotateDegrees }) => {
  const [articleImage, setArticleImage] = useState(null);
  const [rotateDegree, setRotateDegree] = useState(null);

  useEffect(() => {
    if (article_image === "problemSolving") {
      setArticleImage(problemSolving);
      setRotateDegree(rotateDegrees.rotate5);
    }

    if (article_image === "devLearning") {
      setArticleImage(devLearning);
      setRotateDegree(rotateDegrees.rotate4);
    }

    if (article_image === "snowBall") {
      setArticleImage(snowBall);
      setRotateDegree(rotateDegrees.rotate1);
    }

    if (article_image === "developerAssets") {
      setArticleImage(learningAssets);
      setRotateDegree(rotateDegrees.rotate2);
    }

    if (article_image === "developerMindset") {
      setArticleImage(developerMindset);
      setRotateDegree(rotateDegrees.rotate3);
    }
  }, [articleImage]);

  return (
    <Link
      to={`/article/${articleId}`}
      className="h-[195.5px] 
      w-[178px]
      cursor-pointer 
      sm:h-[320px]
      sm:w-[288px]"
    >
      {articleImage && (
        <img
          src={articleImage}
          alt="blog article image"
          className={`h-full w-full rounded-xl object-cover ${rotateDegree}`}
        />
      )}
    </Link>
  );
};

export default ArticleImage;
