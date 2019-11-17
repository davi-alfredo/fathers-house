module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('enderecos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      logradouro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      complemento: {
        type: Sequelize.STRING,
        allowNull: true
      },
      numero: {
        type: Sequelize.INTEGER,
        allowNull: false
      },
      cep: {
        type: Sequelize.STRING,
        allowNull: true
      },
      bairro: {
        type: Sequelize.STRING,
        allowNull: false
      },
      cidade: {
        type: Sequelize.STRING,
        allowNull: false
      },
      uf: {
        type: Sequelize.STRING,
        allowNull: false
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false
      }
    });
  },

  down: queryInterface => {
    return queryInterface.dropTable('enderecos');
  }
};
