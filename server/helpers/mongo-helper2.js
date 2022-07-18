import { MongoClient } from "mongodb";
import dotenv from "dotenv";

const uri =
  "mongodb+srv://LucasBanco:12065722@cluster0.shujl.mongodb.net/?retryWrites=true&w=majority";

dotenv.config();

export const MongoHelper = {
  async connect() {
    try {
      const client = new MongoClient();
      await client.connect();
      console.log("ja ta no coneect");
      const db = client.db("test");
      const result = await db().collection("user");
      console.log(result);
      //   const collection = await db.collection("user");
      //   console.log(collection);
    } catch (err) {
      console.log("alguma coisa errada ocorreu");
    } finally {
      client.close();
    }
  },
  async getCollection() {},
};
