const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.signup = async (req, res) => {
  const { name, email, password, role } = req.body;
  const hashed = await bcrypt.hash(password, 10);

  const user = await User.create({
    name,
    email,
    password: hashed,
    role
  });

  res.json({ message: "Signup successful" });
};

exports.login = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (!user) return res.status(400).json({ msg: "User not found" });

  const match = await bcrypt.compare(password, user.password);
  if (!match) return res.status(400).json({ msg: "Invalid password" });

  const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
  res.json({ token, role: user.role });
};

exports.socialLogin = async (req, res) => {
  const { name, email, role } = req.body;

  let user = await User.findOne({ email });

  if (!user) {
    user = await User.create({
      name,
      email,
      password: "social-login",
      role
    });
  }

  const token = jwt.sign(
    { id: user._id, role: user.role },
    process.env.JWT_SECRET,
    { expiresIn: "1d" }
  );

  res.json({ token, role: user.role, name: user.name });
};
