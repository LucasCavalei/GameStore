import MongoHelper from '../../helpers/mongo-helper.js';
import createOrderRepository from '../../repository/order/create-order-repository';
let userModel;
let orderModel;

const makeOrderSut = () => {
  return new createOrderRepository();
};

describe('must create a order in repositoty/order create-order-repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_TEST_URL);
    orderModel = await MongoHelper.getCollection('orders');
  });
  beforeEach(async () => {
    await orderModel.deleteMany();
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  const fakeOrder = {
    orderProducts: [1, 2, 3],
    somaCart: 200,
    user: 'userId',
  };
  test('createOrder need to be truthy', async () => {
    const sut = makeOrderSut();
    const order = await sut.createOrder({
      fakeOrder,
    });
    expect(order).toBeTruthy();
  });
});
