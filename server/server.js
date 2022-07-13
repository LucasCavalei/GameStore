import dotenv from "dotenv";
import { app } from "./app.js";
dotenv.config();

import mongoose from "mongoose";
const port = 8888;

app.listen(port, () => {
  console.log("8888 port connectado");
});

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database conectado"))
  .catch((err) => console.log("falha ao conectar databse", err));
