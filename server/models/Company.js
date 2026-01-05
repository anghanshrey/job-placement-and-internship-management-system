const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  companyName: String,
  requirements: [String]
});

module.exports = mongoose.model("Company", companySchema);
