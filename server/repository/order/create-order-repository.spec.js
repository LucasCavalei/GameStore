import { RuleTester } from 'eslint';
import MongoHelper from '../../helpers/mongo-helper.js';
import createOrderRepository from './create-order-repository.js';
import { v4 as uuidv4 } from 'uuid';

const makeSut = () => {
  return new createOrderRepository();
};

describe("Should create order repository", () => {
    
 beforeAll(() => {
  MongoHelper.connect();
});
beforeEach(() => {
    const orderCollection =  await MongoHelper.getCollection("orders");
});

test("should",()=>{
const orderData = {
  _id :uuidv4,
 }

})


});
