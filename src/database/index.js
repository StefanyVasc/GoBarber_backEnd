import Sequelize from 'sequelize';

import User from '../app/models/User';

import databaseConfig from '../config/database'; // importando as configurações da base de dados

// array com todos os models da aplicação

const models = [User];

class Database {
  constructor() {
    this.init();
  }

  init() {
    // esse metodo é o responsável pela conexão com o BD
    this.connection = new Sequelize(databaseConfig);

    // após feita a conexão com o bd vou percorrer o array de models e retorno o model (classes)
    // é preciso pegar a variavel conexão de dentro do User
    models.map(model => model.init(this.connection));
  }
}

export default new Database();
