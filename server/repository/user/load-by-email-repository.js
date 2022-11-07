import authorizationInstance from '../../auth.js';
import MongoHelper from '../../helpers/mongo-helper.js';

class LoadUserByEmailRepository {
  async loadByEmail(email, password) {
    const userCollection = await MongoHelper.getCollection('users');
    const user = await userCollection.findOne({ email });
    const userToken = await authorizationInstance.comparer(user, password);
    const newUser = {
      token: userToken,
      userId: user._id,
      status: 200,
    };
    return newUser;
  }
  async findUser(email) {
    const userCollection = await MongoHelper.getCollection('users');
    const user = await userCollection.findOne({ email });
    return user;
  }
}
export default LoadUserByEmailRepository;
