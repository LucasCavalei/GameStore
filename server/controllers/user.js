const jwt = require("jsonwebtoken");
const User = require("../models/User");
const bcrypt = require("bcrypt");
const { createToken } = require("../isAuth.js");

module.exports.signup = async (req, res) => {
  const { name, email, password } = req.body;
  // try {
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
//   const user = await User.create({ name, email, password });
//   console.log("user controlerr criado ", user);
//   if (user) {
//     const token = createToken(user._id);
//     res.status(201).json({
//       id: user._id,
//       name: user.name,
//       email: user.email,
//       token: token,
//       message: "usuario criado com sucesso",
//     });
//   }
// } catch (error) {
//   res.status(400).json({ error, message: "erro ao criar usuario" });
//   console.log(error);
// }

// .then((user) => res.json(user))
// .catch((err) => console.log(err));

// }
// const user = await User.create({
//   name,
//   email,
//   password,
// });
// if (user) {
//   console.log(user);
// }
// bcrypt.genSalt(rounds, (err, salt) => {
//   bcrypt.hash(newUser.password, salt, (err, hash) => {
//   if (err) throw err;
//   newUser.password = hash;

// newUser
//   .save()
//   .then((user) => res.json(user))
//   .catch((err) => console.log(err));
//     });
//   // });
// } catch (err) {
//   res.status(500).json({ err, message: "Algo deu errado" });
// }

module.exports.login = async (req, res) => {
  const { email, password } = req.body;

  await User.findOne({ email })
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
