import MongoHelper from './helpers/mongo-helper.js';
import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config();

const port = 8888;

app.listen(port, () => {
  console.log('8888 port connectado');
});

MongoHelper.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('database conectado'))
  .catch((err) => console.log('falha ao conectar databse', err));
