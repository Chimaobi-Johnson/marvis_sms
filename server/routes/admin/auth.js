const express = require("express");
const authController = require("../../controller/admin/authController");
// const passport = require("../services/passport");

const passport = require("passport");

const router = express.Router();

// router.post("/sign_up", authController.signup);

// router.post("/login", passport.authenticate('local'), (req, res) => {
//   res.status(200).json({ message: "Login Successful", user: req.user });
// });

router.get("/current_user", (req, res) => {
  res.send({ user: req.user });
});

router.get("/logout", (req, res) => {
  req.logout();
  res.redirect("/");
});

module.exports = router;
