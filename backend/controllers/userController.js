const User = require("../models/userModel");
const validator = require("validator");
const bcryptjs = require("bcryptjs");
const jwt = require("jsonwebtoken");

const createToken = (_id) => {
  return jwt.sign({ _id }, process.env.SECRET, { expiresIn: "3d" });
};

// sign up
exports.sign_up = async (req, res) => {
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
    if (!validator.isStrongPassword(password)) {
      throw Error(
        "Password not strong enough. It should include at least one capital letter, one number and one sign"
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

  const { username, password } = req.body;

  try {
    // Create user
    const user = await signup(username, password);

    // create a token
    const token = createToken(user._id);

    // send user info as json
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.log_in = async (req, res) => {
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

  const { username, password } = req.body;

  try {
    // login user
    const user = await login(username, password);

    // create a token
    const token = createToken(user._id);

    // send user info as json
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};
