import { Authorization } from '../../auth.js';
import { MongoHelper } from '../../helpers/mongo-helper.js';
const authorization = new Authorization();

export class LoadByEmailRepository {
  async loadByEmail(email, password) {
    const userCollection = await MongoHelper.getCollection('user');
    const user = await userCollection.findOne({ email });
    // return user && MongoHelper.map(user);
    const userToken = await authorization.comparer(user, password);

    const newUser = {
      token: userToken,
      userId: user._id,
    };
    return newUser;
  }
}
