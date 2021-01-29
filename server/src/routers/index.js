const express = require("express");
const router = express.Router();

const passport = require("../passport");

// check is the user already logged-in or not
router.get("/logged-in", (req, res) => {
  if (req.user) return res.send({ data: req.user });

  return res.send({});
});

// user sign-up
router.post("/signup", (req, res, next) => {
  console.log(req.body)
  passport.authenticate("local-signup", (error, data, message) => {
    if (error) {
      return res.status(500).json({
        message: error || "Internal server error",
      });
    }

    return res.json({ message });
  })(req, res, next);
});

// user log-in
router.post("/login", (req, res, next) => {
  passport.authenticate("local-signin", (error, user) => {
    if (error) {
      return res.status(500).json({
        message: error || "Internal server error",
      });
    }

    req.login(user, (err) => {
      if (err) {
        return res.status(500).json({
          message: err || "Internel server error",
        });
      }

      const { password, ...rest } = user;
      console.log("user", user);

      return res.json(rest);
    });
  });
});

// user log-out
router.get("/logout", (req, res) => {
  req.logOut();

  res.json({ message: "Sign-out scccess" });
});

module.exports = router;
