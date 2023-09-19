const User = require("../models/userModel");
const validator = require("validator");
const bcryptjs = require("bcryptjs");

const signup = async (username, password) => {
  // #1 Username and password validation (form fields)

  // check if username or password exist
  if (!username || !password) {
    throw Error("All fields must be filled");
  }

  // check if username is a valid username
  if (!validator.isLength(username, { min: 4 })) {
    throw Error("Username must at least contain 4 characters");
  }

  // check if password is strong enough
  if (
    !validator.isStrongPassword(password, {
      minLength: 6,
      minNumbers: 0,
      minSymbols: 0,
    })
  ) {
    throw Error(
      "Password must at least contain 6 characters and one uppercase letter"
    );
  }

  // #2 DB result validation
  // check if user exists
  const exists = await User.findOne({ username });

  if (exists) {
    throw Error("Username already in use");
  }

  // #3 DB security
  // hashing the password
  const salt = await bcryptjs.genSalt(10);
  const hash = await bcryptjs.hash(password, salt);

  // #4 Add user to DB
  const user = new User({ username, password: hash });

  await user.save();

  return user;
};

module.exports = signup;
