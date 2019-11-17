module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('arquivos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryHey: true,
        unique: true
      },
      nome_arquivo: {
        type: Sequelize.STRING,
        allowNull: false
      },
      diretorio: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
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
    return queryInterface.dropTable('arquivos');
  }
};
