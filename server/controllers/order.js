import Order from "../models/order.js";
import OrderRepository from "../repository/create-order.js";
const orderRepository = new OrderRepository();

class FinishOrder {
  async execute(httpRequest) {
    //  console.log("Im controller", req.body);
    const { orderProducts, somaCart, user } = httpRequest.body;
    console.log("chegou a rota", orderProducts, somaCart, user);
    const order = await orderRepository.createOrder({
      orderProducts,
      somaCart,
      user,
    });
    console.log("order que voltou do repositoty", order);
    return {
      statusCode: 200,
      body: order,
    };
  }
}

export { FinishOrder };
