import { useAuthContext } from "./useAuthContext";

export const useLogout = () => {
  const { dispatch } = useAuthContext();

  const logout = () => {
    //   reinitiliaze the user local storage
    localStorage.removeItem("user");

    // reinitiliaze user state
    dispatch({ type: "LOGOUT" });
  };

  return { logout };
};
