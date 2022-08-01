import { RuleTester } from 'eslint';
import { MongoClient } from 'mongodb';

import MongoHelper from '../../helpers/mongo-helper.js';

// import { LoadByEmailRepository } from './load-by-email-repository.js';
import LoadByEmailRepository from './load-by-email-repository.js';
const loadByEmailRepository = new LoadByEmailRepository();

let userModel;

const makeSut = () => {
  return new LoadUserByEmailRepository();
};

describe('LoadUserByEmail Repository', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URL);
    userModel = await MongoHelper.getCollection('users');
  });

  beforeEach(async () => {
    await userModel.deleteMany();
  });

  afterAll(async () => {
    await MongoHelper.disconnect();
  });

  test('Should return null if no user is found', async () => {
    const sut = makeSut();
    const user = await sut.finduser('invalid_email@mail.com');
    expect(user).toBeNull();
  });

  test('Should return an user if user is found', async () => {
    const sut = makeSut();
    const fakeUser = await userModel.insertOne({
      email: 'valid_email@mail.com',
      name: 'any_name',
      age: 50,
      state: 'any_state',
      password: 'hashed_password',
    });
    const user = await sut.finduser('valid_email@mail.com');
    expect(user).toEqual({
      _id: fakeUser.ops[0]._id,
      password: fakeUser.ops[0].password,
    });
  });
});

// // -------------------------------------------------------------

// import { RuleTester } from 'eslint';
// import { MongoClient } from 'mongodb';

// import MongoHelper from '../../helpers/mongo-helper.js';

// // import { LoadByEmailRepository } from './load-by-email-repository.js';
// import LoadByEmailRepository from './load-by-email-repository.js';
// // const MissingParamError = require('../../utils/errors/missing-param-error');
// const loadByEmailRepository = new LoadByEmailRepository();
// let userModel;
// const makeSut = () => {
//   return new LoadByEmailRepository();
// };

// describe('LoadUserByEmail Repository', () => {
//   beforeAll(async () => {
//     await MongoHelper.connect(process.env.MONGO_TEST);
//     userModel = await MongoHelper.getCollection('user');
//   });
//   beforeEach(async () => {
//     await userModel.deleteMany();
//   });
//   afterAll(async () => {
//     await MongoHelper.disconnect();
//   });

//   test('Should return user email user is found', async () => {
//     const sut = makeSut();
//     const user = await sut.findUser('sonanjjssdkvnau@g.com');
//     expect(user.email).toBe('sonanjjssdkvnau@g.com');
//   });
// });

test('jkajkjaka', () => {
  const dog = 'rick';
  expect(dog).toBe('rick');
});
