import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ArticlecontextProvider from "./context/ArticleContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ArticlecontextProvider>
      <App />
    </ArticlecontextProvider>
  </React.StrictMode>
);
