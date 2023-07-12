import { useContext } from "react";
import { DarkModeContext } from "../context/DarkModeContext";

export const useDarkModeContext = () => {
  const context = useContext(DarkModeContext);

  if (!context) {
    throw Error(
      "useDarkModeContext must be used inside a darkModeContextProvider"
    );
  }

  return context;
};
