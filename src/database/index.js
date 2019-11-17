import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Membro from '../app/models/Membro';
import Endereco from '../app/models/Endereco';
import Arquivo from '../app/models/Arquivo';
import Status from '../app/models/Status';

const models = [Membro, Endereco, Arquivo, Status];
class DataBase {
  constructor() {
    this.init();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);
    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }
}

export default new DataBase();
