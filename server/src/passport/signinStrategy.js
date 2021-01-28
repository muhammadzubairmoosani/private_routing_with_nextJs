const LocalStrategy = require("passport-local").Strategy;
const User = require("../schema/index");
const bcrypt = require("bcrypt");

const SignupStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (error, user) => {
    if (error) {
      return done(error.message);
    }

    // if the user not signed-up or does not exist in the database
    if (!user) {
      return done("User not found!", false);
    }

    // compare both passwords which are coming from the front-end and the database
    const isValidPassword = bcrypt.compareSync(password, user.password);

    if (!isValidPassword) {
      return done("Incorrect password", false);
    }

    return done(null, user);
  });
});

module.exports = SignupStrategy;
