import MongoHelper from '../../helpers/mongo-helper.js';

class createOrderRepository {
  async createOrder({ orderProducts, somaCart, user }) {
    const orderCollection = await MongoHelper.getCollection('orders');
    const savedOrders = await orderCollection.insert({
      orderProducts,
      somaCart,
      user,
    });
    console.log('sou saveoOrders', savedOrders);
    return savedOrders;
  }
}

export default createOrderRepository;
