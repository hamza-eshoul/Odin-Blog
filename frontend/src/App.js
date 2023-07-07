import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import LogIn from "./pages/LogIn";
import ArticlesList from "./pages/LogIn";

const App = () => {
  return (
    <div className="bg-zinc-50 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles_list" element={<ArticlesList />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
