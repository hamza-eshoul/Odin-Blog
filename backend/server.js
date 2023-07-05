require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const articleRoutes = require("./routes/articles");

const Article = require("./models/articleModel");

// initialize app
const app = express();
app.use(cors());

// middleware
app.use(express.json());

// routes
app.use("/articles", articleRoutes);

// connect to db
mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => {
    // listen for requests
    app.listen(process.env.PORT, () =>
      console.log(
        `Succesfully connected to db and server listening on ${process.env.PORT}`
      )
    );
  })
  .catch((err) => console.log(err));

// populate article data

const populateDB = async () => {
  // Create articles
  await Promise.all([
    articleCreate(
      "Advice on the programming and problem solving attitude",
      "The attitude of a programmer when he solves problems is as important as the problem-solving process itself",
      "testImg",
      "This article is going to reference a great answer that a programmer gave to another fellow programmer on reddit regarding the right attitude to have when solving problems. \n The answer goes as follows : 'As in countless similar posts: it is a 'you' problem. \n You have the wrong attitude. If something doesn't work the way you think it should, you have learnt something. You have learnt how not to do something. This is equally important to knowing how to do something. \n You seem to be taking every programming problem personnally and this is the wrongest possible approach. Don't let these things get to you. \n Frustration is 100% personal thing. It is solely up to you if you let it get to you or not. \n Also, maybe employ a different approach to programming: plan before program - detail your project before you start programming' "
    ),
    articleCreate(
      "Deadlines cause un-needed stress and hinder performance, particularly in the learning process",
      "Learning is a process that is incredibly complex and unique to each individual causing comparisons and deadlines to actually  be deleterious to the learner.",
      "image",
      "Throughout my programming journey in the Odin Project, I did hear a lot of noise around me in social media stemming from  developers comparing their journeys often in brutal and inconsistent ways. The answer given by a fellow developer in the Odin Project discord regarding this matter was illuminating. \n Here is a summary of the answer : \n It may take you longer than others to grasp concepts, or it may take you less time. This doesn't mean you're smarter or dumber. This is a personal journey. Because everyone is different, and have different backgrounds, it's not worth comparing yourself to others taking a similar journey. Be wary of giving out advice about timelines or sharing your timeline to others. You are not the same as them and you have NO idea who they are and what they are able to do. "
    ),
    // articleCreate("title", "introduction", "image", "content"),
    // articleCreate("title", "introduction", "image", "content"),
    // articleCreate("title", "introduction", "image", "content"),
  ]);
};

// Create article
async function articleCreate(title, introduction, image, content) {
  const article = new Article({
    title,
    introduction,
    image,
    content,
  });

  article.save();
}

// populateDB();
