import User from "../models/User.js";
import UserRepository from "../repository/user.js";
import bcrypt from "bcrypt";

const userRepository = new UserRepository();
import { createToken } from "../isAuth.js";

export class Signup {
  async execute(req, res) {
    const { name, email, password } = req.body;
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "senha e email não podem estar em branco." });
    }
    const userExists = await userRepository.getUserByEmail(email);
    if (userExists) {
      return res.status(400).json({ message: "usuarcccio já existe" });
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
  }
}

export class Login {
  async execute(req, res) {
    const { email, password } = req.body;
    console.log(email, password);
    if (!email || !password) {
      return res
        .status(400)
        .json({ message: "senha e email não podem estar em branco." });
    }
    const user = await User.findOne({ email });
    if (user) {
      console.log(user);
      res.status(400).json({ message: "Usuario não existe" });
    }
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) {
        return res.status(400).json({ message: "Erro ao comparar senha" });
      }
      if (!isMatch) {
        return res.status(400).json({ message: "Senha incorreta" });
      }
      return res.status(200).json({
        message: "Login realizado com sucesso",
        id: user._id,
        token: createToken(user._id),
      });
    });
  }

  // if (err) {
  //   res.status(400).json({ err, message: "Senha incorreta" });
  // }
  // if (isMatch) {
  //   return res.status(200).json({
  //     message: "Usuario logado",
  //     id: isMatch._id,
  //     token: createToken(user._id),
  //   });
  // }
}
// export const signup = async (req, res) => {
// const { name, email, password } = req.body;
// if (!email || !password) {
//   return res
//     .status(400)
//     .json({ message: "senha e email não podem estar em branco." });
// }
// const userExists = await User.findOne({ email });
// if (userExists) {
//   return res.status(400).json({ message: "usuario já existe" });
// }
//   const salt = await bcrypt.genSalt(10);
//   const hashedPassword = await bcrypt.hash(password, salt);

//   const newUser = new User({
//     name: name,
//     email: email,
//     password: hashedPassword,
//   });

//   await newUser.save((err, savedUser) => {
//     if (err) {
//       res.status(400).json({ message: "Usuario não pode ser salvo" });
//       console.log(err);
//     }
//     res.status(200).json({
//       message: "Usuario salvo com sucesso",
//       id: savedUser._id,
//       token: createToken(savedUser._id),
//     });
//   });
// };
