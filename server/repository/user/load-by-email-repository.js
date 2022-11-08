import authorizationInstance from '../../auth.js';
import MongoHelper from '../../helpers/mongo-helper.js';

class LoadUserByEmailRepository {
  async loadByEmail(email, password) {
    const userCollection = await MongoHelper.getCollection('user');
    const user = await userCollection.findOne({ email });
    console.log('user found in user collection', user);
    const userToken = await authorizationInstance.comparer(user, password);
    console.log('token in loadByEmailRepository', userToken);
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
