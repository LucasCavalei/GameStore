const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createToken } = require("../isAuth.js");

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    res
      .status(400)
      .json({ message: "senha e email não podem estar em branco." });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    res.status(400).json({ message: "usuario já existe" });
  } else {
    const newUser = new User({
      name: name,
      email: email,
      password: password,
    });
    bcrypt.genSalt((err, salt) => {
      bcrypt.hash(newUser.password, salt, (err, hash) => {
        if (err) throw err;
        newUser.password = hash;
        newUser
          .save()
          .then((user) => res.json(user))
          .catch((err) => console.log(err));
      });
    });
  }
};

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
