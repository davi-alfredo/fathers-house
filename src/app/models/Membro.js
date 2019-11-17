import Sequelize, { Model } from 'sequelize';

class Membro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        data_nascimento: Sequelize.DATE
      },
      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, {
      foreignKey: 'id_avatar',
      as: 'avatar'
    });
    this.belongsTo(models.Endereco, {
      foreignKey: 'id_endereco',
      as: 'endereco'
    });
    this.belongsTo(models.Status, {
      foreignKey: 'id_situacao',
      as: 'status'
    });
  }
}

export default Membro;
