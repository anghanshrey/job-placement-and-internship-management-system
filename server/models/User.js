const mongoose = require("mongoose");


const forgetSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
  role: String,

  resetToken: String,
  resetTokenExpiry: Date
});


const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true },
  password: String,
  role: { type: String, enum: ["student", "company"] }
});

module.exports= mongoose.model("User", userSchema);
