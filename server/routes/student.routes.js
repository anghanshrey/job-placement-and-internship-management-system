const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  createOrUpdateProfile,
  getStudentsBySkills
} = require("../controllers/student.controller");

router.post("/profile", auth, createOrUpdateProfile);
router.get("/", auth, getStudentsBySkills);

module.exports = router;
