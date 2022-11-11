import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import dotenv from 'dotenv';
dotenv.config();

import { app } from '../../app.js';
let userModel;

describe('Should create user by supertest in user-routes', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_TEST_URI);
    userModel = await MongoHelper.getCollection('user');
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  test('user-signup should status 200', async () => {
    const response = await request(app).post('/user/signup').send({
      name: 'supertest',
      email: 'supertest2@21mail.com',
      password: 'hashed_password',
    });
    expect(response.statusCode).toBe(200);
  });
});