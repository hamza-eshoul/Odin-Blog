import { createContext, useReducer } from "react";

export const DarkModeContext = createContext();

export const darkModeReducer = (state, action) => {
  switch (action.type) {
    case "SET_DARK_MODE":
      return { isDarkModeActive: true };
    case "REMOVE_DARK_MODE":
      return { isDarkModeActive: false };
    default:
      return state;
  }
};

const DarkModeContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(darkModeReducer, {
    isDarkModeActive: false,
  });

  return (
    <DarkModeContext.Provider value={{ ...state, dispatch }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeContextProvider;
