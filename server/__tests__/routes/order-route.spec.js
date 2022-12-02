import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import { app } from '../../app.js';
let userModel;

describe('Should create order', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('user');
    await userModel.deleteMany();
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('create a user before ir order to get token order method', async () => {
    const response = await request(app).post('/user/signup').send({
      name: 'supertest3',
      email: 'supertest3@21mail.com',
      password: 'hashed_password',
    });
    const { token } = response.body;
    const fakeOrder = {
      orderProducts: [1, 2, 3],
      somaCart: 200,
      user: 'userId',
    };
    const orderResponse = await request(app)
      .post('/order')
      .set({
        authorization: 'bearer ' + token,
        'Content-Type': 'application/json',
      })
      .send(fakeOrder);
    expect(response.status).toBe(200);
  });
});
