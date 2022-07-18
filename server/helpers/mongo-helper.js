import { MongoClient } from "mongodb";
// falta dd esee mando Collection no api-Signup-LIMPINHO
import dotenv from "dotenv";

dotenv.config();

const uri = process.env.MONGO_TEST;

export const MongoHelper = {
  // async connect(uri) {
  async connect() {
    const connection = MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    return connection;
  },
  async getCollection(name) {
    const client = await MongoHelper.connect();
    return client.db().collection(name);
  },
};
