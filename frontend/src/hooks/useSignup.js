import { useState } from "react";
import { useAuthContext } from "../hooks/useAuthContext";
import { useNavigate } from "react-router-dom";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);

  const { dispatch } = useAuthContext();
  const navigate = useNavigate();

  const signup = async (url, signupData) => {
    setError(null);
    setIsPending(true);

    try {
      // signup
      const res = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signupData),
      });

      const json = await res.json();

      if (!res || !res.ok) {
        throw new Error(json.error);
      }

      //  save the user to local storage
      localStorage.setItem("user", JSON.stringify(json));

      //   dispatch login action
      dispatch({ type: "LOGIN", payload: json });

      //   navigate to the homepage
      navigate("/");
    } catch (err) {
      console.log(err);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};
