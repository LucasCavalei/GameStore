import express from 'express';
import { expressAdapter } from '../express-adapter.js';
import { FinishOrder } from '../controllers/order/finish-order.js';
import authorizationInstance from '../auth.js';

const orderRouter = express.Router();
const finishOrder = new FinishOrder();
// const authorization = new Authorization();

orderRouter.post(
  '/',
  authorizationInstance.authorize,
  expressAdapter(finishOrder)
);

export default orderRouter;
