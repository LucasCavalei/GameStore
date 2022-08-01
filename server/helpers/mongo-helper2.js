import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const MongoHelper = {
  connect() {
    const mongoClient = new MongoClient(url);
    mongoClient.connect(function (err, client) {
      const db = client.db('test');
      client.close();
    });
  },
};
export default MongoHelper;
// const MongoHelper = {
//   async connect(uri) {
//     this.uri = uri;
//     const client = new MongoClient(this.uri);
//     try {
//       await client.connect();
//       const db = client.db('test');
//     } catch (err) {
//       console.log('alguma coisa errada ocorreu');
//     } finally {
//       client.close();
//     }
//   },
//   async disconnect() {
//     await this.client.close();
//   },
//   async getCollection(name) {
//     await this.connect(this.uri);
//     return db.collection(name);
//   },
// };
