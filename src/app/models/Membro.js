import Sequelize, { Model } from 'sequelize';
import { differenceInYears, parseISO } from 'date-fns';

class Membro extends Model {
  static init(sequelize) {
    super.init(
      {
        nome: Sequelize.STRING,
        telefone: Sequelize.STRING,
        email: Sequelize.STRING,
        data_nascimento: Sequelize.DATE,
        idade: {
          type: Sequelize.VIRTUAL,
          get() {
            const data = new Date(
              new Date().getFullYear(),
              new Date().getMonth(),
              new Date().getDay()
            );
            const age = differenceInYears(data, parseISO(this.data_nascimento));
            return age;
          }
        }
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
      foreignKey: 'id_status',
      as: 'status'
    });
    this.belongsToMany(models.Culto, {
      foreignKey: 'id_culto',
      through: 'cultos_participantes',
      as: 'cultos'
    });
  }
}

export default Membro;
