import { ArticleContext } from "../context/ArticleContext";
import { useContext } from "react";

export const useArticleContext = () => {
  const context = useContext(ArticleContext);

  if (!context) {
    throw Error(
      "useArticleContext must be used inside a useArticleContextProvider"
    );
  }

  return context;
};
