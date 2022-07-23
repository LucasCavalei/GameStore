import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const MongoHelper = {
  client: null,

  async connect() {
    this.client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await this.client.connect();
      console.log('conectado');
    } catch (err) {
      console.log('erro ao conectar', err);
    }
  },
  async getCollection(name) {
    return this.client.db().collection(name);
  },
  // const db = client.db('test');
  // const collection = db.collection('test');
  // const result = await collection.insertOne({
  //   name: 'teste',
  //   email: 'lucasCavaleiro@g.com',
  // });
  // console.log(result.insertedId);

  // const result2 = await collection.find({}).toArray();
  // console.log(result2);
  // client.close();
};

export default MongoHelper; // ------------------------------------------------

// import { MongoClient } from 'mongodb';
// // falta dd esee mando Collection no api-Signup-LIMPINHO
// import dotenv from 'dotenv';

// dotenv.config();

// // const uri = process.env.MONGO_TEST;

// const MongoHelper = {
//   // async connect(uri) {
//   async connect(uri) {
//     this.uri = uri;
//     this.client = MongoClient.connect(uri, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//   },
//   // async disconnect() {
//   //   await this.client.close();
//   //   this.client = null;
//   //   this.db = null;
//   // },

//   async getCollection(name) {
//     // if (!this.client) {
//     // if (!this.client || !this.client.isConnected()) {
//     await this.connect(this.uri);
//     // }
//     return this.client.db().collection(name);
//   },
// };
// export default MongoHelper;
