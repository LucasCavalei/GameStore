import MongoHelper from './mongo-helper2.js';

test('sdasdasdasdas', async () => {
  await MongoHelper.connect(process.env.MONGO_TEST);
  // let accountCollection = await MongoHelper.getCollection('users');
  //  await expect(accountCollection).toBeTruthy();
});
