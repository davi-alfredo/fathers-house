import Sequelize, { Model } from 'sequelize';

class Culto extends Model {
  static init(sequelize) {
    super.init(
      {
        descricao: Sequelize.STRING,
        preleitor: Sequelize.STRING,
        louvor: Sequelize.STRING,
        abertura: Sequelize.STRING,
        oferta: Sequelize.STRING,
        valor_oferta: Sequelize.NUMBER,
        data: Sequelize.DATE
      },

      {
        sequelize
      }
    );
    return this;
  }

  static associate(models) {
    this.belongsTo(models.Arquivo, {
      foreignKey: 'id_tipo_culto',
      as: 'tipo_culto'
    });
    this.belongsToMany(models.Membro, {
      foreignKey: 'id_participante',
      through: 'cultos_participantes',
      as: 'participantes'
    });
  }
}

export default Culto;
