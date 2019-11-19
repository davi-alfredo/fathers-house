import Sequelize, { Model } from 'sequelize';

class TipoCulto extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING
      },
      {
        sequelize,
        tableName: 'tipos_cultos'
      }
    );
    return this;
  }
}

export default TipoCulto;
