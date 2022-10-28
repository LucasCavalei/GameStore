import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import { app } from '../../app.js';
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

  test('user-login deve retonar status 200', async () => {
    await userModel.insertOne({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    const response = await request(app).post('/user/login').send({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    expect(response.status).toBe(200);
  });
});
