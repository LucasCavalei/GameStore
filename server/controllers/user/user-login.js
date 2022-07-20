import LoadByEmailRepository from '../../repository/user/load-by-email-repository.js';
const loadByEmailRepository = new LoadByEmailRepository();

export class Login {
  async execute(httpResquest) {
    const { email, password } = httpResquest.body;
    if (!email || !password) {
      return {
        statusCode: 400,
        body: 'senha e email não podem estar em branco',
      };
    }
    const user = await loadByEmailRepository.loadByEmail(email, password);
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
