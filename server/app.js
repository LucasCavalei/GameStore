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

//  );
// app.use(jsonPlaceholderProxy);
// app.use(express.static('dist'));
// app.use('/AffiliateCampaigns', jsonPlaceholderProxy);
app.use(morgan('tiny'));

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use('/', (req, res) => res.json({ username: 'cavaleiro okkkk' }));
export { app };
