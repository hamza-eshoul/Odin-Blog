import { useState, useEffect } from "react";
import { useAuthContext } from "./hooks/useAuthContext";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// components
import Homepage from "./pages/Home/Homepage";
import Article from "./pages/Article/Article";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import ArticlesList from "./pages/ArticlesList";
import Header from "./components/Header";
import Footer from "./components/Footer";
import BackgroundLayer from "./components/BackgroundLayer";

const App = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const { user } = useAuthContext();

  useEffect(() => {
    const body = document.querySelector("body");

    if (isDarkMode === true) {
      body.classList.add("dark");
    } else if (isDarkMode === false) {
      body.classList.remove("dark");
    }
  }, [isDarkMode]);

  return (
    <>
      <BrowserRouter>
        <BackgroundLayer />
        <Header isDarkMode={isDarkMode} setIsDarkMode={setIsDarkMode} />

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/article/:id" element={<Article />} />
          <Route path="/articles_list" element={<ArticlesList />} />
          <Route
            path="/signup"
            element={user ? <Navigate to="/" /> : <Signup />}
          />
          <Route
            path="/login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>

        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
