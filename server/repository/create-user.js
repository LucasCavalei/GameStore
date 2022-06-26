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
    });
    const userToken = await authorization.createToken(user);
    const newUser = {
      token: userToken,
      userId: user.id,
    };
    return newUser;
  }
}
export default UserRepository;
