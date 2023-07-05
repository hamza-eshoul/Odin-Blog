const express = require("express");
const router = express.Router();
const articleController = require("../controllers/articleController");

// get all articles
router.get("/", articleController.get_all_articles);

// get three first articles
router.get("/three_first_articles", articleController.get_three_first_articles);

module.exports = router;
