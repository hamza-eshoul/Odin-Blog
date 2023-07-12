import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import problemSolving from "../images/problemSolving.jpg";
import devLearning from "../images/devLearning.jpg";
import snowBall from "../images/snowBall.jpg";
import learningAssets from "../images/learningAssets.webp";
import developerMindset from "../images/devMindset.webp";
import { useArticleContext } from "../hooks/useArticleContext";

const ShowcaseBlog = ({ articleId, articleImage, rotateDegrees }) => {
  // state
  const [showcaseImg, setShowcaseImg] = useState("");
  const [rotateDegree, setRotateDegree] = useState("");

  // hooks
  const { dispatch } = useArticleContext();

  useEffect(() => {
    if (articleImage == "problemSolving") {
      setShowcaseImg(problemSolving);
      setRotateDegree(rotateDegrees.rotate5);
    } else if (articleImage == "devLearning") {
      setShowcaseImg(devLearning);
      setRotateDegree(rotateDegrees.rotate4);
    } else if (articleImage == "snowBall") {
      setShowcaseImg(snowBall);
      setRotateDegree(rotateDegrees.rotate1);
    } else if (articleImage == "developerAssets") {
      setShowcaseImg(learningAssets);
      setRotateDegree(rotateDegrees.rotate2);
    } else if (articleImage == "developerMindset") {
      setShowcaseImg(developerMindset);
      setRotateDegree(rotateDegrees.rotate3);
    }
  }, []);

  // functions
  const setArticle = () => {
    dispatch({ type: "SET_ARTICLE_ID", payload: articleId });
  };

  return (
    <Link
      to="/article"
      className="h-[320px] w-[288px] cursor-pointer"
      onClick={setArticle}
    >
      <img
        src={showcaseImg}
        alt=""
        className={`h-full w-full object-cover rounded-xl ${rotateDegree}`}
      />
    </Link>
  );
};

export default ShowcaseBlog;
