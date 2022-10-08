import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import userRouter from './routes/user-route.js';
import orderRouter from './routes/order-route.js';

const app = express();
app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use(morgan('tiny'));

export { app };
