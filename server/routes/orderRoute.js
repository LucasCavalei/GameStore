// const express = require("express");
import express from "express";
const orderRouter = express.Router();
//  const orderController = require("../controllers/order");
// import orderController from "../controllers/order";
import { get_order } from "../controllers/order.js";
import { post_order } from "../controllers/order.js";

// const { isAuth } = require("../isAuth.js");
import { IsAuth } from "../isAuth.js";
const isAuth = new IsAuth();

orderRouter.post("/", isAuth.authorize, post_order);
orderRouter.get("/", get_order);
orderRouter.get("/", function (req, res) {
  res.send("sou order route");
});

export default orderRouter;
