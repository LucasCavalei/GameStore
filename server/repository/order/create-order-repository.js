import MongoHelper from '../../helpers/mongo-helper.js';

class createOrderRepository {
  async createOrder({ orderProducts, somaCart, user }) {
    const orderCollection = await MongoHelper.getCollection('orders');
    const savedOrders = await orderCollection.insertOne({
      orderProducts,
      somaCart,
      user,
    });
    const order = await savedOrders.insertedId.toString();
    return order;
  }
}

export default createOrderRepository;
