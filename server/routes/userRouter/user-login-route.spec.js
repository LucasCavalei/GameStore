import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import { app } from '../../app.js';
let userModel;

describe('create a user THEN login this user', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('user');
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('create a user with userModel then login /user/login with suertest', async () => {
    await userModel.insertOne({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    //Its possible to create an existing user beacuse it bypass repositories and its dependecies
    const response = await request(app).post('/user/login').send({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    const { token } = response.body;
    expect(response.statusCode).toEqual(200);
    expect(token).toBeTruthy();
  });
});
