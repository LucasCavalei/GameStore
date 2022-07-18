import { MongoHelper } from "../helpers/mongo-helper.js";

export class LoadByEmailRepository {
  async loadByEmail(email) {
    const userCollection = await MongoHelper.getCollection("user");
    const result = await userCollection.findOne({ email });
    // return user && MongoHelper.map(user);
    console.log("result", result);
    // return user;
  }
}
