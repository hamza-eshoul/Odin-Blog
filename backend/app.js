require("dotenv").config();
const express = require("express");

// initialize app
const app = express();

// listen to the server
app.listen(process.env.PORT, () =>
  console.log(`Server running and listening on ${process.env.PORT}`)
);
