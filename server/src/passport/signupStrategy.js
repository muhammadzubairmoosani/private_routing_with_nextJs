const LocalStrategy = require("passport-local").Strategy;
const User = require("../schema/index");
const bcrypt = require("bcrypt");

const SignupStrategy = new LocalStrategy((username, password, done) => {
  User.findOne({ username }, (error, user) => {
    if (error) {
      return done(error.message);
    }

    // if the user already signed-up or exist in the database
    if (user) {
      return done("User already exist!");
    }

    // create a new user if the user is not signed-up or exist in the database
    if (!user) {
      return User.create({
        username,
        password: bcrypt.hashSync(password, 10),
      })
        .then(() => done(null, false, "Sign-up success"))
        .catch((err) => done(err.message, null));
    }
  });
});

module.exports = SignupStrategy;
