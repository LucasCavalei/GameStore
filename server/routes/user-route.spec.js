import userRouter from './user-route';
import request from 'supertest';
import MongoHelper from '../helpers/mongo-helper';
import { app } from '../app.js';
let userModel;

describe('Should create user repository', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('users');
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('user-signup deve retonar status 200', async () => {
    const response = await request(app).post('/user/signup').send({
      name: 'supertest7',
      email: 'supertes7@21mail.com',
      password: 'hashed_password',
    });
    expect(response.status).toBe(200);
  });
});
