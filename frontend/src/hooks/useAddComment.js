export const useAddComment = () => {
  const addComment = async (user, commentContent, articleId) => {
    // send a post request
    const response = await fetch(
      "https://odin-blog-api-rezs.onrender.com/articles/addComment",
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
      }
    );

    const json = await response.json();

    return json;
  };

  return { addComment };
};
