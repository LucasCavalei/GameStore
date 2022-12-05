import request from 'supertest';
import bcrypt from 'bcrypt';
import MongoHelper from '../../helpers/mongo-helper.js';
import { app } from '../../app.js';
let userModel;

describe('create a user THEN login this user', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('user');
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('should return token true and status 200', async () => {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('hashed_password', salt);
    await userModel.insertOne({
      name: 'supertest',
      email: 'lucas@21mail.com',
      password: hashedPassword,
    });

    //Its possible to create an existing user because it bypass repositories and its dependecies
    const response = await request(app).post('/user/login').send({
      name: 'supertest',
      email: 'lucas@21mail.com',
      password: hashedPassword,
    });
    const { token } = response.body;
    expect(response.statusCode).toEqual(200);
    expect(token).toBeTruthy;
  });
});
