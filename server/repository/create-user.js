import User from "../models/User.js";
import bcrypt from "bcrypt";
import { Authorization } from "../auth.js";
const authorization = new Authorization();

class UserRepository {
  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async createUser({ name, email, password }) {
    console.log("create user", name, email, password);
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const user = await User.create({
      name: name,
      email: email,
      password: hashedPassword,

      // const newUser = new User({
      //   name: name,
      //   email: email,
      //   password: hashedPassword,
      // });
      // newUser.save((err, savedUser) => {
      //   if (err) {
      //     return err;
      //     // return res.status(400).json({ message: "Usuario não pode ser salvo" });
      //     // console.log(err);
      //   }

      //   // return res.status(200).json({
      //   //   message: "Usuario salvo com sucesso",
      //   //   id: savedUser._id,
      //   //   token: createToken(savedUser._id),
      //   // });
      // });
      // return savedUser;
    });
    // console.log("sou user puro", user.id, user.name);
    const userToken = await authorization.createToken(user);
    const newUser = {
      token: userToken,
      userId: user.id,
    };
    return newUser;
    // return { ...user, toooken: userToken };
  }
  async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user);
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}
export default UserRepository;
