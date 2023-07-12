const Article = require("../models/articleModel");

// get all articles
exports.get_all_articles = async (req, res) => {
  // fetch all Articles from the DB
  const articles = await Article.find();

  if (!articles) {
    res.status(400).json({
      errorMsg: "There are no articles",
    });
  }

  res.status(200).json(articles);
};

// get three first articles
exports.get_three_first_articles = async (req, res) => {
  // fetch the three first articles from the DB
  const firstThreeArticles = await Article.find()
    .sort({ createdAt: -1 })
    .limit(3);

  if (!firstThreeArticles) {
    res.status(400).json({
      errorMsg: "There are no articles",
    });
  }

  res.status(200).json(firstThreeArticles);
};

// get five articles
exports.get_five_articles = async (req, res) => {
  // fetch five articles from the DB
  const fiveArticles = await Article.find().limit(5);

  if (!fiveArticles) {
    res.status(400).json({
      errorMsg: "There are no articles",
    });
  }

  res.status(200).json(fiveArticles);
};

// get one article
exports.get_one_article = async (req, res) => {
  const { id } = req.params;

  // fetch article from DB
  const article = await Article.findById(id);

  // validate article
  if (!article) {
    res.status(400).json({
      errorMsg: "The article with the specified ID does not exist",
    });
  }
  res.status(200).json(article);
};

// add comment to article
exports.add_comment_artice = async (req, res) => {
  // destructure the body of the request
  const { user, commentContent, articleId } = req.body;

  // update article comments
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
    res.status(400).json({
      errorMsg: "The article comment could not be added",
    });
  }

  res.status(200).json(addArticleComment);
  addArticleComment.save();
};
