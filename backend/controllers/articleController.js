const mongoose = require("mongoose");
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
