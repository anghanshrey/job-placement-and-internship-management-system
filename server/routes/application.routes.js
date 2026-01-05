const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const {
  applyJob,
  getCompanyApplications
} = require("../controllers/application.controller");

router.post("/apply", auth, applyJob);
router.get("/company/:companyId", auth, getCompanyApplications);

module.exports = router;
