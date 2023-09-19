import React from "react";
import ReactDOM from "react-dom/client";

// components
import App from "./App";
import AuthContextProvider from "./context/AuthContext";

// style
import "./index.css";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AuthContextProvider>
      <App />
    </AuthContextProvider>
  </React.StrictMode>,
);
