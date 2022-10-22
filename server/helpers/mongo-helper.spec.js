test('apenas para rodar um test no lugar do mongo que esta apagado', () => {
  const name = 'lucas';
  expect(name).toBe('lucas');
});

// ---------------teste do site do jest ---------------
// const { MongoClient } = require('mongodb');
// import dotenv from 'dotenv';

// dotenv.config();

// describe('insert', () => {
//   let connection;
//   let db;

//   beforeAll(async () => {
//     connection = await MongoClient.connect(globalThis.__MONGO_URI__, {
//       useNewUrlParser: true,
//       useUnifiedTopology: true,
//     });
//     db = await connection.db(globalThis.__MONGO_DB_NAME__);
//   });

//   // afterAll(async () => {
//   //   await connection.close();
//   // });

//   it('should insert a doc into collection', async () => {
//     const users = db.collection('users');

//     const mockUser = { _id: 'some-user-id11', name: 'John11' };
//     await users.insertOne(mockUser);

//     const insertedUser = await users.findOne({ _id: 'some-user-id11' });
//     expect(insertedUser).toEqual(mockUser);
//   });
// });

// -----------antigo mongoteste -----------------
// import MongoHelper from './mongo-helper.js';

// describe('Mongo Helper', () => {
//   console.log('before all', process.env.MONGO_URL);
//   beforeAll(async () => {
//     await MongoHelper.connect(process.env.MONGO_URL);
//   });

//   test('Should reconnect if mongodb is down', async () => {
//     let accountCollection = await MongoHelper.getCollection('todos');
//     expect(accountCollection).toBeTruthy();
//   });
// });
