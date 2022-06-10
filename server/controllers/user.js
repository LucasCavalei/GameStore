import User from "../models/User.js";
import bcrypt from "bcrypt";

import { createToken } from "../isAuth.js";

export const signup = async (req, res) => {
  const { name, email, password } = req.body;
  if (!email || !password) {
    return res
      .status(400)
      .json({ message: "senha e email não podem estar em branco." });
  }
  const userExists = await User.findOne({ email });
  if (userExists) {
    return res.status(400).json({ message: "usuario já existe" });
  }
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const newUser = new User({
    name: name,
    email: email,
    password: hashedPassword,
  });

  await newUser.save((err, savedUser) => {
    if (err) {
      res.status(400).json({ message: "Usuario não pode ser salvo" });
      console.log(err);
    }
    res.status(200).json({
      message: "Usuario salvo com sucesso",
      id: savedUser._id,
      token: createToken(savedUser._id),
    });
  });
};

export const login = async (req, res) => {
  const { email, password } = req.body;

  const user = await User.findOne({ email });
  if (!user) {
    res.status(400).json({ message: "Usuario não existe" });
  }
  bcrypt.compare(password, user.password, (err, isMatch) => {
    if (err) {
      res.status(400).json({ err, message: "Senha incorreta" });
    }
    if (isMatch) {
      res.status(200).json({
        message: "Usuario logado",
        id: isMatch._id,
        token: createToken(user._id),
      });
    }
  });
};
