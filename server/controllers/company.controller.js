const Company = require("../models/Company");

exports.saveOrUpdateCompany = async (req, res) => {
  const { companyName, requiredSkills } = req.body;

  const company = await Company.findOneAndUpdate(
    { userId: req.user.id },
    {
      companyName,
      requiredSkills,
      email: req.user.email
    },
    { new: true, upsert: true }
  );

  res.json(company);
};

exports.getMyCompanyProfile = async (req, res) => {
  const company = await Company.findOne({ userId: req.user.id });
  res.json(company);
};
