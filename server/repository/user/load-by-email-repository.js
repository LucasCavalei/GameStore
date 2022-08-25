import Authorization from '../../auth.js';
import MongoHelper from '../../helpers/mongo-helper.js';
const authorization = new Authorization();

class LoadUserByEmailRepository {
  async loadByEmail(email, password) {
    const userCollection = await MongoHelper.getCollection('users');
    const user = await userCollection.findOne({ email });
    console.log('suseeeeeeeeeee', user);
    const userToken = await authorization.comparer(user, password);

    const newUser = {
      token: userToken,
      userId: user._id,
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
