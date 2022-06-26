import UserRepository from "../repository/create-user.js";

const userRepository = new UserRepository();

export class Signup {
  async execute(httpResquest) {
    const { name, email, password } = httpResquest.body;
    console.log(name, email, password);
    if (!email || !password) {
      return {
        statusCode: 400,
        body: "senha e email não podem estar em branco",
      };
    }
    const userExists = await userRepository.getUserByEmail(email);
    if (userExists) {
      return {
        statusCode: 400,
        body: "Usuario ja existe",
      };
    }

    const newUser = await userRepository.createUser({
      name,
      email,
      password,
    });
    return {
      statusCode: 200,
      body: newUser,
    };
  }
}
