// const Cart = require("../models/cart");
// import Cart from "../models/cart";
import Order from "../models/order.js";
// const Order = require("../models/order");
// import { Order } from "../models/order.js";
// import { Cart } from "../models/cart.js";

const get_order = async (req, res) => {
  res.send("Im at Order Controller");
};

const post_order = async (req, res) => {
  //  console.log("Im controller", req.body);
  const { orderProducts, somaCart, user } = req.body;
  const newOrder = await new Order({
    orderProducts,
    somaCart,
    user,
  });
  try {
    ("");
    newOrder.save((err, order) => {
      if (err) {
        res.status(400).json({ message: "Erro ao salvar pedido", err });
      }
      console.log("sou order controller", order);
      res.status(201).json({
        orderId: order.id,
        total: order.somaCart,
        user: order.user,
        qty: order.orderProducts.lenght,
        message: "Compra finalizada. Obrigado por comprar conosco!",
      });
    });
  } catch (err) {
    res.status(400).json({
      message: "Voce precisa estar logado para realiza a compra",
      err,
    });
  }
};

export { get_order, post_order };
