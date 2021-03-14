const passport = require("passport");
const bcrypt = require("bcryptjs");
const LocalStrategy = require("passport-local").Strategy;

const User = require("../models/User");

passport.use(
  new LocalStrategy(
    {
      usernameField: "loginEmail",
      passwordField: "loginPassword",
    },

    function (email, password, done) {
      User.findOne({ email: email }, function (err, user) {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: "Incorrect email." });
        }
        bcrypt.compare(password, user.password).then((isEqual) => {
          if (!isEqual) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        });
      });
    }
  )
);

passport.serializeUser((user, done) => {
  // To generate a token using user._id to send to the client as cookie
  done(null, user._id);
});

passport.deserializeUser((id, done) => {
  // To remove server token
  User.findById(id).then((user) => {
    done(null, user);
  });
});
