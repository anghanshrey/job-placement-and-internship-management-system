const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const adminOnly = require("../middleware/admin.middleware");
const {
  getAllStudents,
  getAllCompanies,
  getAllUsers
} = require("../controllers/admin.controller");

router.get("/students", auth, adminOnly, getAllStudents);
router.get("/companies", auth, adminOnly, getAllCompanies);
router.get("/users", auth, adminOnly, getAllUsers);

module.exports = router;
