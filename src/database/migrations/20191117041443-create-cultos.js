module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cultos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      descricao: {
        type: Sequelize.STRING,
        allowNull: false
      },
      abertura: {
        type: Sequelize.STRING,
        allowNull: true
      },
      louvor: {
        type: Sequelize.STRING,
        allowNull: true
      },
      oferta: {
        type: Sequelize.STRING,
        allowNull: true
      },
      preleitor: {
        type: Sequelize.STRING,
        allowNull: false
      },
      data: {
        type: Sequelize.DATEONLY,
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
    return queryInterface.dropTable('cultos');
  }
};
