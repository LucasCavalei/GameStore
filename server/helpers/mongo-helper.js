import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config();

const uri = process.env.MONGO_URI;

const MongoHelper = {
  async connect() {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    try {
      await client.connect();
      console.log('conectado');
    } catch (err) {
      console.log('erro ao conectar', err);
    }

    const db = client.db('test');
    const collection = db.collection('test');
    const result = await collection.insertOne({
      name: 'teste',
      email: 'lucasCavaleiro@g.com',
    });
    console.log(result.insertedId);

    const result2 = await collection.find({}).toArray();
    console.log(result2);
    client.close();
  },
};
export default MongoHelper; // ------------------------------------------------
