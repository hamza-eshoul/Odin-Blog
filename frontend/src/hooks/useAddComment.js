export const useAddComment = () => {
  const addComment = async (user, commentContent, articleId) => {
    // send a post request
    const response = await fetch("http://localhost:4000/articles/addComment", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        user,
        commentContent,
        articleId,
      }),
    });

    const json = await response.json();

    return json;
  };

  return { addComment };
};
