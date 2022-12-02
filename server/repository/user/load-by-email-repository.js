import authorizationInstance from '../../auth.js';
import MongoHelper from '../../helpers/mongo-helper.js';
// const authorization = new Authorization();

class LoadUserByEmailRepository {
  async loadByEmail(email, password) {
    const userCollection = await MongoHelper.getCollection('user');
    const user = await userCollection.findOne({ email });
    const userToken = await authorizationInstance.comparer(user, password);

    const newUser = {
      token: userToken,
      userId: user._id,
    };
    return newUser;
  }
  async findUser(email) {
    const userCollection = await MongoHelper.getCollection('user');
    const user = await userCollection.findOne({ email });
    return user;
  }
}
export default LoadUserByEmailRepository;
