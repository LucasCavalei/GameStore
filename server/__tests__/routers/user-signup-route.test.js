import request from 'supertest';
import MongoHelper from '../../helpers/mongo-helper.js';
import { app } from '../../app.js';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
dotenv.config();
let userModel;

describe('Should create user by supertest in user-routes', () => {
  beforeAll(async () => {
    MongoHelper.connect(process.env.MONGO_URL);
    userModel = await MongoHelper.getCollection('user');
  });
  beforeEach(async () => {
    await userModel.deleteMany();
  });
  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  test('user-signup should status 200', async () => {
    // AQUI SERÁ ERRO PORQUE USUARIUO JA EXISTE, NAO ESTRA LIMPANDO ESSE  userModel.deleteMany();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash('hashed_password', salt);
    const response = await request(app).post('/user/signup').send({
      name: 'supeddrtest',
      email: 'lucsssas@21mail.com',
      password: hashedPassword,
    });

    console.log(response.text);
    expect(response.statusCode).toBe(200);
  });
});
