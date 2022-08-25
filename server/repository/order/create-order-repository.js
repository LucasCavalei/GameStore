import MongoHelper from '../../helpers/mongo-helper';

class createOrderRepository {
  async createOrder({ orderProducts, somaCart, user }) {
    const orderCollection = await MongoHelper.getCollection('orders');
    const savedOrders = await orderCollection.insert({
      orderProducts,
      somaCart,
      user,
    });
    return savedOrders;
  }
}

export default createOrderRepository;
