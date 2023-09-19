const User = require("../models/userModel");
const bcryptjs = require("bcryptjs");

const login = async (username, password) => {
  // #1 Light Username and password validation (form fields)

  // check if username or password exist
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  // #2 DB result validation
  // check if user exists
  const user = await User.findOne({ username });

  if (!user) {
    throw Error("Incorrect username");
  }

  // check if password match
  const match = await bcryptjs.compare(password, user.password);

  if (!match) {
    throw Error("Incorrect password");
  }

  return user;
};

module.exports = login;
