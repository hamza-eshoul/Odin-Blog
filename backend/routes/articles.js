const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// #1 Articles
router.get("/", articleController.get_all_articles);

router.get("/:id", articleController.get_one_article);

router.get("/three_first_articles", articleController.get_three_first_articles);

router.get("/five_articles", articleController.get_five_articles);

// #2 Articles Comments

router.post("/:article_id/comments", articleController.add_article_comment);

router.delete(
  "/:article_id/comments",
  articleController.delete_article_comment
);

module.exports = router;
