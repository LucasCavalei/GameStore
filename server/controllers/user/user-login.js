import LoadUserByEmailRepository from '../../repository/user/load-by-email-repository.js';
const loadUserByEmailRepository = new LoadUserByEmailRepository();

export class Login {
  async execute(httpResquest) {
    const { email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: 'senha e email não podem estar em branco',
      };
    }
    const user = await loadUserByEmailRepository.loadByEmail(email, password);
    if (!user) {
      return {
        statusCode: 400,
        body: 'Usuario não existe',
      };
    }
    return {
      statusCode: 200,
      body: user,
    };
  }
}
