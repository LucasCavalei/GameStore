const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
const port = 8080;
const morgan = require("morgan");

const userRoute = require("./routes/userRoute");
const orderRoute = require("./routes/orderRoute");

app.use(express.json());
app.use("/user", userRoute);
app.use("/order",orderRoute);
app.use(morgan("tiny"));

app.use(cors());

app.use(express.json());
require('dotenv').config();


mongoose.connect("",{
    useNewUrlParser:true,
    useUnifiedTopology: true
})
.then(() => console.log("database conectado"))
.catch((err) => console.log("database fail", err));


app.listen(port,()=> {console.log("8080 connectado")});





