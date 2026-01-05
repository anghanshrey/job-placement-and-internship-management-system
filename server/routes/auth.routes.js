const router = require("express").Router();
const { signup, login } = require("../controllers/auth.controller");
const { socialLogin } = require("../controllers/socialAuth.controller");


router.post("/signup", signup);
router.post("/login", login);
router.post("/social-login", socialLogin);

module.exports = router;
