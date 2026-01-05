const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
    unique: true
  },

  name: {
    type: String,
    required: true
  },

  email: {
    type: String,
    required: true
  },

  college: {
    type: String,
    required: true
  },

  degree: {
    type: String,
    required: true
  },

  skills: {
    type: [String],
    required: true
  },

  github: {
    type: String,
    required: true
  },

  linkedin: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model("Student", studentSchema);
