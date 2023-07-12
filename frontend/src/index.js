import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import ArticlecontextProvider from "./context/ArticleContext";
import AuthContextProvider from "./context/AuthContext";
import DarkModeContextProvider from "./context/DarkModeContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <DarkModeContextProvider>
      <AuthContextProvider>
        <ArticlecontextProvider>
          <App />
        </ArticlecontextProvider>
      </AuthContextProvider>
    </DarkModeContextProvider>
  </React.StrictMode>
);
