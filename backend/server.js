const express = require("express");
const cors = require("cors");
require("dotenv").config();
const mongoose = require("mongoose");
// require routes
const articleRoutes = require("./routes/articles");
const userRoutes = require("./routes/user");

// initialize app
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use("/articles", articleRoutes);
app.use("/user", userRoutes);

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
