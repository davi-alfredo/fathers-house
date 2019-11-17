import Sequelize, { Model } from 'sequelize';

class Arquivo extends Model {
  static init(sequelize) {
    super.init(
      {
        nome_arquivo: Sequelize.STRING,
        diretorio: Sequelize.STRING,
        url: {
          type: Sequelize.VIRTUAL,
          get() {
            return `${process.env.APP_URL}/arquivos/${this.diretorio}`;
          }
        }
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Arquivo;
