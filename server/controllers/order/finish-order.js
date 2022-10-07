// import Order from '../models/order.js';
// import createOrderRepository from '../repository/order/kcreate-order-repository.js';
import CreateOrderRepository from '../../repository/order/create-order-repository.js';
const createOrderRepository = new CreateOrderRepository();

class FinishOrder {
  async execute(httpRequest) {
    const { orderProducts, somaCart, user } = httpRequest.body;

    const order = await createOrderRepository.createOrder({
      orderProducts,
      somaCart,
      user,
    });
    const demo = Object.keys(order);
    console.log('order que voltou do repositoty', order.insertedIds._id);
    return {
      statusCode: 200,
      body: demo,
    };
  }
}

export { FinishOrder };
