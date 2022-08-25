import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

const MongoHelper = {
  client: null,
  async connect(uri) {
    this.url = uri;
    this.client = new MongoClient(this.url);

    try {
      await this.client.connect();
    } catch (err) {
      console.log(err);
    }
  },
  async disconnect() {
    try {
      await this.client.disconnect();
    } catch (err) {
      console.log("can't disconnect", err);
    }
  },

  async getCollection(name) {
    return this.client.db().collection(name);
  },
};

export default MongoHelper;
