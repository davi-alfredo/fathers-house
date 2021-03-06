import Sequelize, { Model } from 'sequelize';

class Status extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'status'
      }
    );
    return this;
  }
}

export default Status;
