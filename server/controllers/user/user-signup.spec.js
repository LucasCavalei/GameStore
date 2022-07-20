import User from '../../models/user.js';
import dotenv from 'dotenv';

import mongoose from 'mongoose';
import { app } from '../../app.js';
import request from 'supertest';
dotenv.config();

mongoose.connect(process.env.MONGO_TEST, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// beforeEach(async,"Clean User dataBase",()=>{
// await User.deleteMany({})

// })

test('qasdasd', async () => {
  const response = await request(app).post('/user/signup').send({
    name: 'deveePagarNme',
    email: 'ssskdscSdssdaasl2ssnvsssssadsddSleseiro@g.com',
    password: '121212',
  });
  expect(response.statusCode).toBe(200);
});

// describe("deve retornar algo", () => {
//   test("asasdasdasdsadas", async () => {
//     const sut = new Signup();
//     // // const whatever = new Whatever();

//     const httpRequest = {
//       body: {
//         name: "deveePagarNme",
//         email: "ssskdscdssdaa2ssnvaddleseiro@g.com",
//         password: "121212",
//       },
//     };
//     // const response = await whatever.execute(httpRequest);
//     const httpResponse = await sut.execute(httpRequest);
//     // expect(guerra).toBe("cavaleiro");
//     expect(httpResponse).toBe(12065722);
//   });
// });
