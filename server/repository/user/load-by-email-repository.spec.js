import MongoHelper from '../../helpers/mongo-helper.js';
import LoadUserByEmailRepository from './load-by-email-repository.js';
let userModel;

const makeSut = () => {
  return new LoadUserByEmailRepository();
};

describe('check if repository return user by its email', () => {
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
    const user = await sut.findUser('invalid_email@mail.com');
    expect(user).toBeNull();
  });

  test('Should return an fakeUserId equal to userId in findUser', async () => {
    const sut = makeSut();
    const fakeUser = await userModel.insertOne({
      name: 'any_name',
      email: 'valid_email@mail.com',
      password: 'hashed_password',
    });
    const user = await sut.findUser('valid_email@mail.com');
    const userId = user._id.toString();
    const fakeUserId = fakeUser.insertedId.toString();
    expect(userId).toEqual(fakeUserId);
  });
  //more about ops[0]: https://stackoverflow.com/questions/40766654/node-js-mongodb-insert-one-and-return-the-newly-inserted-document
});
