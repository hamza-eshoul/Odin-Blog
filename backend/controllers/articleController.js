const Article = require("../models/articleModel");

exports.get_all_articles = async (req, res) => {
  try {
    const articles = await Article.find();

    if (!articles) {
      throw Error("There are no articles");
    }

    res.status(200).json(articles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.get_three_first_articles = async (req, res) => {
  try {
    const firstThreeArticles = await Article.find()
      .sort({ createdAt: -1 })
      .limit(3);

    if (!firstThreeArticles) {
      throw Error("There are no articles");
    }
    res.status(200).json(firstThreeArticles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.get_five_articles = async (req, res) => {
  try {
    const fiveArticles = await Article.find().limit(5);

    if (!fiveArticles) {
      throw Error("There are no articles");
    }

    res.status(200).json(fiveArticles);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.get_one_article = async (req, res) => {
  const { id } = req.params;

  try {
    const article = await Article.findById(id);

    if (!article) {
      throw Error("The article with the specified ID does not exist");
    }
    res.status(200).json(article);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.add_comment_article = async (req, res) => {
  const { user, commentContent, articleId } = req.body;

  try {
    const addArticleComment = await Article.findByIdAndUpdate(
      articleId,
      {
        $push: {
          comments: {
            author: user,
            content: commentContent,
          },
        },
      },
      { new: true }
    );

    if (!addArticleComment) {
      throw Error("The article comment could not be added");
    }

    res.status(200).json(addArticleComment);
    addArticleComment.save();
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.delete_comment_article = async (req, res) => {
  const { articleId, articleComments, commentId } = req.body;

  try {
    const filteredArticleComments = articleComments.filter(
      (comment) => !(comment._id == commentId)
    );

    const updatedArticle = await Article.findByIdAndUpdate(
      articleId,
      {
        $set: {
          comments: filteredArticleComments,
        },
      },
      { new: true }
    );

    res.status(200).json(updatedArticle);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
