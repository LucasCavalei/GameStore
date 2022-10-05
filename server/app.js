import express from 'express';
const app = express();

// import dotenv from "dotenv";

// dotenv.config();

// import mongoose from "mongoose";

import cors from 'cors';
import morgan from 'morgan';

// const port = 8888;

import userRouter from './routes/user-route.js';
import orderRouter from './routes/order-route.js';

app.use(express.json());
app.use(cors());

app.use('/user', userRouter);
app.use('/order', orderRouter);
app.use(morgan('tiny'));

// mongoose
//   .connect(process.env.MONGO_URL, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(console.log("database conectado"))
//   .catch((err) => console.log("falha ao conectar databse", err));

// app.listen(port, () => {
//   console.log("8888 port connectado");
// });
export { app };
