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
