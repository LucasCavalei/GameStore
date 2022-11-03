import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper';
import { app } from '../../app.js';
let userModel;

describe(' create user and then Login the same user', () => {
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
  test('Deve dar lucas', async () => {
    let name = 'Lucas';
    await userModel.insertOne({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    expect(name).toBe('Lucas');
  });
  test('sdssssssdsda', async () => {
    const response = await request(app).post('/user/login').send({
      name: 'supertest',
      email: 'supertest@21mail.com',
      password: 'hashed_password',
    });
    const { token } = response.body;
    expect(token).toBeTruthy();
  });
});
