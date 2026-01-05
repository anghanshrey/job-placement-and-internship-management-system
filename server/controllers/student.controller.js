const Student = require("../models/Student");

exports.createOrUpdateProfile = async (req, res) => {
  const {
    name,
    email,
    college,
    degree,
    skills,
    github,
    linkedin
  } = req.body;

  // Validation
  if (
    !name || !email || !college || !degree ||
    !skills || skills.length === 0 ||
    !github || !linkedin
  ) {
    return res.status(400).json({
      message: "All fields are required"
    });
  }

  let student = await Student.findOne({ userId: req.user.id });

  if (student) {
    // UPDATE
    student.name = name;
    student.email = email;
    student.college = college;
    student.degree = degree;
    student.skills = skills;
    student.github = github;
    student.linkedin = linkedin;
    await student.save();
  } else {
    // CREATE
    student = await Student.create({
      userId: req.user.id,
      name,
      email,
      college,
      degree,
      skills,
      github,
      linkedin
    });
  }

  res.json(student);
};

exports.getStudentsBySkills = async (req, res) => {
  const { skills } = req.query;

  if (!skills) {
    return res.json([]);
  }

  const skillArray = skills.split(",");

  const students = await Student.find({
    skills: { $in: skillArray }
  });

  res.json(students);
};
