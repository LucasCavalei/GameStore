import express from 'express';
import path from 'path';
import cors from 'cors';
import MongoHelper from './helpers/mongo-helper.js';

import dotenv from 'dotenv';
import { createProxyMiddleware } from 'http-proxy-middleware';
import morgan from 'morgan';
import userRouter from './routes/userRouter/user-route.js';
import orderRouter from './routes/orderRoute/order-route.js';

const app = express();
app.use(express.json());
app.use(cors());
app.use(express.static(path.join(__dirname, '../dist')));
const jsonPlaceholderProxy = createProxyMiddleware({
  target: 'http://localhost:8888',
  //   changeOrigin: true, // for vhosted sites, changes host header to match to target's host
  logLevel: 'debug',
  pathRewrite: { '^/AffiliateCampaigns': '' },
});
// app.use(
//   '/',
//   createProxyMiddleware({
//     target: 'http://localhost:8888',
//     changeOrigin: true,
//     ws: true,
//   })
//  );
// app.use(jsonPlaceholderProxy);
// app.use(express.static('dist'));
app.use('/AffiliateCampaigns', jsonPlaceholderProxy);
app.use(morgan('tiny'));
dotenv.config();
app.use('/api/getUsername', (req, res) =>
  res.send({ username: 'novoooooo api  cavaleiro okkkk' })
);

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

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/', (req, res) => res.send({ username: 'cavaleiro okkkk' }));
export { app };
