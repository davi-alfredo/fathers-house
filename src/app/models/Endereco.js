import Sequelize, { Model } from 'sequelize';

class Endereco extends Model {
  static init(sequelize) {
    super.init(
      {
        logradouro: Sequelize.STRING,
        complemento: Sequelize.STRING,
        numero: Sequelize.INTEGER,
        cep: Sequelize.NUMBER,
        bairro: Sequelize.STRING,
        cidade: Sequelize.STRING,
        uf: Sequelize.STRING
      },
      {
        sequelize
      }
    );
    return this;
  }
}

export default Endereco;
