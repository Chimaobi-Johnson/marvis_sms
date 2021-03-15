const User = require("../../models/User");
const bcrypt = require("bcryptjs");

exports.register = (req, res) => {
  const { firstName, lastName, email, password } = req.body;
  bcrypt
    .hash(password, 12)
    .then((hashedPw) => {
      const user = new User({
        firstName,
        lastName,
        email,
        password: hashedPw,
      });
      return user.save();
    })
    .then((result) => {
      res.status(201).json({ message: "Admin user created successfully" });
    })
    .catch((err) => {
      console.log(err);
    });
};