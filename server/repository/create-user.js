// import User from "../models/User.js";
import { MongoHelper } from "../helpers/mongo-helper.js";
import bcrypt from "bcrypt";
import { Authorization } from "../auth.js";
const authorization = new Authorization();

class CreateUserRepository {
  async createUser({ name, email, password }) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userCollection = await MongoHelper.getCollection("user");
    const savedUser = await userCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });
    return await this.generateToken(savedUser);
  }
  async loadByEmail(email) {
    const userCollection = await MongoHelper.getCollection("user");
    const result = await userCollection.findOne({ email });
    return result;
  }

  async generateToken(savedUser) {
    const userToken = await authorization.createToken(savedUser);
    console.log("userToken", userToken);
    const newUser = {
      token: userToken,
      userId: savedUser.insertedId,
    };
    return newUser;
  }
}
export default CreateUserRepository;
