const createToken = require("../helpers/createToken");
const signup = require("../helpers/signup");
const login = require("../helpers/login");

exports.sign_up = async (req, res) => {
  const { username, password } = req.body;

  try {
    // Create user
    const user = await signup(username, password);

    // Create a token
    const token = createToken(user._id);

    // send user info as json
    res.status(200).json({ user, token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.log_in = async (req, res) => {
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
