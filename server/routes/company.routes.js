const router = require("express").Router();
const auth = require("../middleware/auth.middleware");

const {
  saveOrUpdateCompany,
  getMyCompanyProfile
} = require("../controllers/company.controller");

router.post("/profile", auth, saveOrUpdateCompany);
router.get("/profile", auth, getMyCompanyProfile);

module.exports = router;
