import MongoHelper from './mongo-helper.js';

describe('Mongo Helper', () => {
  console.log('before all', process.env.MONGO_URI);
  beforeAll(async () => {
    await MongoHelper.connect(process.env.MONGO_URI);
  });

  test('Should reconnect if mongodb is down', async () => {
    let accountCollection = await MongoHelper.getCollection('todos');
    expect(accountCollection).toBeTruthy();
  });
});
