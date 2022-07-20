// import Order from '../models/order.js';
// import createOrderRepository from '../repository/order/kcreate-order-repository.js';
import CreateOrderRepository from '../../repository/order/create-order-repository.js';
const orderRepository = new CreateOrderRepository();

class FinishOrder {
  async execute(httpRequest) {
    //  console.log("Im controller", req.body);
    const { orderProducts, somaCart, user } = httpRequest.body;
    console.log('chegou a rota', orderProducts, somaCart, user);
    const order = await orderRepository.createOrder({
      orderProducts,
      somaCart,
      user,
    });
    console.log('order que voltou do repositoty', order);
    return {
      statusCode: 200,
      body: order,
    };
  }
}

export { FinishOrder };
