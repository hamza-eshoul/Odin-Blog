import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./components/Home/Homepage";
import Article from "./components/Article/Article";

const App = () => {
  const [article, setArticle] = useState({});
  return (
    <div className="bg-zinc-50 ">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage setArticle={setArticle} />} />
          <Route path="/article" element={<Article article={article} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
