import MongoHelper from '../../helpers/mongo-helper.js';
import CreateUserRepository from './create-user-repository';
let userModel;

const makeSut = () => {
  return new CreateUserRepository();
};

describe('Connect no databse by mongoHelper then create a user', () => {
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_TEST_URL);
    userModel = await MongoHelper.getCollection('users');
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
