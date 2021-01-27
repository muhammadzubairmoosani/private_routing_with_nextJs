const express = require("express");

const router = express.Router();

// user schema
const { User } = require("../routers");

// checking every time is user logged in or not
router.get("/user-is-logged-in", (req, res) => {
  if (req.user) return res.send({ data: req.user });
  return res.send({});
});

module.exports = router;
