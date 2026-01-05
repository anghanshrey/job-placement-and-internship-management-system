const router = require("express").Router();
const auth = require("../middleware/auth.middleware");
const { createCompany, getCompanies } = require("../controllers/company.controller");

router.post("/profile", auth, createCompany);
router.get("/", auth, getCompanies);


module.exports = router;
