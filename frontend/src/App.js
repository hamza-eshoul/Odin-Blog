import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Article from "./pages/Article";
import LogIn from "./pages/LogIn";
import Signup from "./pages/Signup";
import ArticlesList from "./pages/ArticlesList";
import { useDarkModeContext } from "./hooks/useDarkModeContext";

const App = () => {
  const { isDarkModeActive } = useDarkModeContext();

  return (
    <div className={`${isDarkModeActive ? "dark bg-black" : "bg-zinc-50"} `}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article" element={<Article />} />
          <Route path="/articles_list" element={<ArticlesList />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<LogIn />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
