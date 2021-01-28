const passport = require("passport");

const User = require("../schema");

const SignupStrategy = require("./signupStrategy");
const SigninStrategy = require("./signinStrategy");

// create persistent login sessions of user
passport.serializeUser((user, done) => done(null, user.username));

// deserializeUser the persistent sessions of user
passport.deserializeUser((username, done) => {
  User.findOne({ username }, (error, user) => {
    done(error, user);
  });
});

passport.use("local-signup", SignupStrategy);
passport.use("local-signin", SigninStrategy);

module.exports = passport;
