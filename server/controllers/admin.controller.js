const Student = require("../models/Student");
const Company = require("../models/Company");
const User = require("../models/User");

exports.getAllStudents = async (req, res) => {
  const students = await Student.find();
  res.json(students);
};

exports.getAllCompanies = async (req, res) => {
  const companies = await Company.find();
  res.json(companies);
};

exports.getAllUsers = async (req, res) => {
  const users = await User.find({}, "name email role");
  res.json(users);
};
