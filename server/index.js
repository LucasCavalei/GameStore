const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8000;
const morgan = require("morgan");
require("dotenv").config();

const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(express.json());
app.use("/user", userRoute);
app.use("/order", orderRoute);
app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(console.log("database conectado"))
  .catch((err) => console.log("falha ao conectar databse", err));

app.listen(port, () => {
  console.log("8000 connectado");
});
