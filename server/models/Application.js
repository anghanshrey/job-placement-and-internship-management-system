const mongoose = require("mongoose");

const applicationSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true
    },
    companyId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Company",
      required: true
    },
    status: {
      type: String,
      default: "Applied"
    }
  },
  { timestamps: true }
);

module.exports = mongoose.model("Application", applicationSchema);
