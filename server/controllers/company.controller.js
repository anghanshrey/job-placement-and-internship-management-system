const Company = require("../models/Company");

exports.createCompany = async (req, res) => {
  const company = await Company.create({
    userId: req.user.id,
    ...req.body
  });
  res.json(company);
};
exports.getCompanies = async (req, res) => {
  const companies = await Company.find().populate(
    "userId",
    "name email"
  );
  res.json(companies);
};