import express from "express";
import { expressAdapter } from "../express-adapter.js";
import { FinishOrder } from "../controllers/order.js";
import { Authorization } from "../auth.js";

const orderRouter = express.Router();
const finishOrder = new FinishOrder();
const authorization = new Authorization();

orderRouter.post("/", authorization.authorize, expressAdapter(finishOrder));

export default orderRouter;
