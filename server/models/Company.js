const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  email: String,
  requiredSkills: [String]
});

module.exports = mongoose.model("Company", companySchema);
