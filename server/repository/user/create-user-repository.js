import MongoHelper from '../../helpers/mongo-helper.js';
import bcrypt from 'bcrypt';
import authorizationInstance from '../../auth.js';

class CreateUserRepository {
  async createUser({ name, email, password }) {
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    const userCollection = await MongoHelper.getCollection('users');
    const savedUser = await userCollection.insertOne({
      name,
      email,
      password: hashedPassword,
    });
    console.log('salvei ', savedUser);
    const userToken = await authorizationInstance.createToken(savedUser);
    const newUser = {
      token: userToken,
      userId: savedUser.insertedId,
    };
    return newUser;
  }
}
export default CreateUserRepository;
