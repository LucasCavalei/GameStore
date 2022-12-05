import MongoHelper from '../../helpers/mongo-helper.js';
import CreateUserRepository from '../../repository/user/create-user-repository.js';
let userModel;

const makeSut = () => {
  return new CreateUserRepository();
};

describe('Connect  databse by mongoHelper then create a user', () => {
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
  test('should token be valid', async () => {
    const sut = makeSut();
    const user = await sut.createUser({
      name: 'any_name',
      email: 'any_email@mail.om',
      password: 'hashed_password',
    });
    expect(user.token).toBeTruthy();
  });
});

//   // afterAll(async () => {
//   //   await MongoHelper.disconnect();
//   // });

//   // jest.unstable_mockModule(
//   //   '../../repository/user/create-user-repository.js',
//   //   () => {
//   //     return {
//   //       __esModule: true,
//   //       makeSut: jest.fn().mockResolvedValue(() => {
//   //         'mockedCreateUser';
//   //       }),
//   //     };
//   //   }
//   // );
//   // const MongoHelperMock = jest
//   //   .fn()
//   //   .mockImplementationOnce(() => 'mockedCreateUser');
//   // jest.unstable_mockModule('../../helpers/mongo-helper.js', () => {
//   //   return {
//   //     __esModule: true,
//   //     MongoHelper: MongoHelperMock(),
//   //   };
//   // });

//   test('should token be valid', async () => {
//     const MongoHelper = await import('../../helpers/mongo-helper.js');
//     console.log('MongoRepository 22222222222', MongoHelper);
//     const makeSut = () => {
//       return new CreateUserRepository();
//     };
//     const sut = makeSut();
//     const fakeuser = {
//       name: 'fakeuser',
//       email: 'fakeuser@example.com',
//       password: 'fakepassword',
//     };
//     await sut.createUser(fakeuser);
//     // MongoHelper();
//     expect(MongoHelper).toHaveBeenCalled();
//     expect(true).toBe(true); // const user = await sut.createUser({
//     //   name: 'any_name',
//     //   email: 'any_email@mail.om',
//     //   password: 'hashed_password',
//     // });
//     //  expect(user.token).toBeTruthy();
//   });
// });
