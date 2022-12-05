import MongoHelper from './helpers/mongo-helper.js';
import dotenv from 'dotenv';
import { app } from './app.js';
dotenv.config();

app.listen(8888, () => {
  console.log('8888 port connectado');
  //  console.log(`Listening on ${port}`));
});
('');

MongoHelper.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(console.log('connected database success'))

  .catch((err) => console.log('falha ao conectar database', err));
