import Order from '../../models/order.js';

class createOrderRepository {
  async createOrder({ orderProducts, somaCart, user }) {
    const order = await Order.create({
      orderProducts,
      somaCart,
      user,
    });
    return order;
  }
}

export default createOrderRepository;
