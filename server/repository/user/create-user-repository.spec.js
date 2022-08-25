import MongoHelper from '../../helpers/mongo-helper.js';
import CreateUserRepository from './create-user-repository';
let userModel;
const makeSut = () => {
  return new CreateUserRepository();
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
  test('whaetver', async () => {
    const sut = makeSut();
    const user = await sut.createUser({
      name: 'any_name',
      email: 'valid_email@mail.com',
      password: 'hashed_password',
    });
    expect(user.token).toBeTruthy();
  });
});
