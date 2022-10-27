import { parseSync } from '@babel/core';
import MongoHelper from '../../helpers/mongo-helper.js';
import authorizationInstance from '../../auth.js';
import CreateUserRepository from './create-user-repository';
let userModel;

const makeSut = () => {
  return new CreateUserRepository();
};

describe('LoadUserByEmail Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('usersExperiment');
  });

  beforeEach(async () => {
    await userModel.deleteMany();
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });
  test('whaetver', async () => {
    const sut = makeSut();
    const user = await sut.createUser({
      name: 'any_junuior8',
      email: 'valid_junior8@mail.com',
      password: 'hashed_password',
    });
    console.log('so reotrin token', user.token);
    expect(user.token).toBeTruthy();
  });
});
// jest.mock('../../auth.js', () => ({
//   createToken: jest.fn(() => 'token'),
// }));

// let userModel;
// // const makeSut = () => {
// //   return new CreateUserRepository();
// // };

// describe('LoadUserByEmail Repository', () => {
//   // beforeAll(async () => {
//   // await MongoHelper.connect(process.env.MONGO_URL);
//   // userModel = await MongoHelper.getCollection('users');
//   // beforeAll(() => {  //verificar se before all async eh usado como acima
//   // });
//   const fakeuser = {
//     name: 'fakeuser',
//     email: 'fakeuser@example.com',
//     password: 'fakepassword',
//   };

//   test(' verificar se authenticacao eh mocada', () => {
//     const criaDenovo = new CreateUserRepository();
//     criaDenovo.createUser(fakeuser);
//     expect(createToken()).toHaveBeenCalledTimes(1);
//   });
// });

// -----------------------------------------------------
