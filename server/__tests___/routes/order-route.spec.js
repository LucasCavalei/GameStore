import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import { app } from '../../app.js';
let userModel;
let orderModel;

describe('Should create order', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_TEST_URI);
    userModel = await MongoHelper.getCollection('user');
    const responseDelete = await userModel.deleteMany();
    console.log('sou response deletemany', responseDelete);
  });
  // beforeEach(async () => {
  //   await userModel.deleteMany();
  // });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  // -----------------------------------------------------

  // describe('Should create user repository', () => {
  // beforeAll(async () => {
  //   MongoHelper.connect(process.env.MONGO_TEST_URL);
  //   userModel = await MongoHelper.getCollection('users');
  // });
  // beforeEach(async () => {
  //   await userModel.deleteMany();
  // });
  // afterAll(async () => {
  //   await MongoHelper.disconnect();
  // });

  test('create a user before ir order to get token order method', async () => {
    const response = await request(app).post('/user/signup').send({
      name: 'supertest3',
      email: 'supertest3@21mail.com',
      password: 'hashed_password',
    });
    console.log('ver response signup user', response.body);
    const { token } = response.body;
    console.log('soh pra ver ve o token esta pronto', token);
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

    // const orderResponse = await request(app).post('/order', fakeOrder, {
    //   headers: {
    //     authorization: 'Bearer ' + token,
    //   },
    // });
    console.log(
      '&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&& sou oredrResponse',
      orderResponse.statusCode
    );
    expect(response.status).toBe(200);
  });
});
