import { useState } from "react";

export const useAddComment = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(null);

  const addComment = async (user, commentContent, articleId) => {
    setIsPending(true);
    setError(null);

    try {
      const res = await fetch(
        "https://odin-blog-api-rezs.onrender.com/articles/comment",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            user,
            commentContent,
            articleId,
          }),
        },
      );

      if (!res || !res.ok) {
        throw new Error(res.statusText);
      }

      setIsPending(false);
      setError(null);

      const json = await res.json();

      return json;
    } catch (err) {
      setIsPending(false);
      setError("Could not add the comment");
      console.log(err.message);
    }
  };

  return { addComment, error, setError, isPending };
};
