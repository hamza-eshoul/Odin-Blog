const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentsSchema = new Schema(
  {
    author: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const articleSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    introduction: {
      type: String,
      required: true,
    },
    image: {
      type: String,
      required: true,
    },
    content: {
      type: String,
      required: true,
    },
    comments: {
      type: [commentsSchema],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Article", articleSchema);
