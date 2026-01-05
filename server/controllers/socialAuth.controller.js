const jwt = require("jsonwebtoken");
const User = require("../models/User");

exports.socialLogin = async (req, res) => {
  try {
    const { name, email, role } = req.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        name,
        email,
        role,
        password: "social-login"
      });
    }

    const token = jwt.sign(
      { id: user._id, role: user.role },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    res.json({
      token,
      role: user.role,
      name: user.name
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
