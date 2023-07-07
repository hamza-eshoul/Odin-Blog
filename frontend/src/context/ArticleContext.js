import { createContext, useReducer } from "react";
import { getYear, format } from "date-fns";

export const ArticleContext = createContext();

export const articleReducer = (state, action) => {
  switch (action.type) {
    case "SET_ARTICLE_ID":
      return { articleId: action.payload };
    default:
      return state;
  }
};

const ArticlecontextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(articleReducer, {
    articleId: null,
  });

  const formatDate = (date) => {
    const formattedDate =
      format(new Date(date), "LLLL") +
      " " +
      format(new Date(date), "co") +
      ", " +
      getYear(new Date(date));
    return formattedDate;
  };

  return (
    <ArticleContext.Provider value={{ state, dispatch, formatDate }}>
      {children}
    </ArticleContext.Provider>
  );
};

export default ArticlecontextProvider;
