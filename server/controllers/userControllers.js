import User from "../model/User.js";

export const loginUser = async (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res
      .status(400)
      .json({ success: false, message: "Username and password are required!" });
  }

  try {
    const user = await User.findOne({ username });
    if (!user || user.password !== password) {
      return res
        .status(401)
        .json({ success: false, message: "Invalid username or password!" });
    }
    res
      .status(200)
      .json({ success: true, message: "Logged in successfully!", id: user._id });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

export const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res.status(400).json({ success: false, message: 'Username, email, and password are required!' });
  }

  try {
    const usernameExists = await User.findOne({ username });
    if (usernameExists) {
      return res.status(400).json({ success: false, message: 'Username already taken!' });
    }
    const emailExists = await User.findOne({ email });
    if (emailExists) {
      return res.status(400).json({ success: false, message: 'Email address already taken!' });
    }

    const user = await User.create(req.body);
    res.status(201).json({ success: true, message: 'User successfully registered!', user });
  } catch (error) {
    console.error('Error registering user:', error);
    res.status(500).json({ success: false, message: 'Internal server error' });
  }
};
