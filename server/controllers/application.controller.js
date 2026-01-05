const Application = require("../models/Application");
const Student = require("../models/Student");

exports.applyJob = async (req, res) => {
  const student = await Student.findOne({ userId: req.user.id });

  const application = await Application.create({
    studentId: student._id,
    companyId: req.body.companyId
  });

  res.json({ message: "Job Applied Successfully", application });
};

exports.getCompanyApplications = async (req, res) => {
  const apps = await Application.find({ companyId: req.params.companyId })
    .populate("studentId");

  res.json(apps);
};
