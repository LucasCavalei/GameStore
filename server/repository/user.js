import User from "../models/User.js";

export default class UserRepository {
  async getUser(id) {
    return await User.findById(id);
  }

  async getUserByEmail(email) {
    return await User.findOne({ email });
  }

  async getAllUsers() {
    return await User.find();
  }

  async createUser(user) {
    return await User.create(user);
  }

  async updateUser(id, user) {
    return await User.findByIdAndUpdate(id, user);
  }

  async deleteUser(id) {
    return await User.findByIdAndDelete(id);
  }
}
