module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('cultos_participantes', {
      id_culto: {
        type: Sequelize.INTEGER,
        allowNull: true,
        REFERENCES: { MODEL: 'cultos', key: 'id' },
        onUpload: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_participante: {
        type: Sequelize.INTEGER,
        allowNull: true,
        REFERENCES: { MODEL: 'membros', key: 'id' },
        onUpload: 'CASCADE',
        onDelete: 'SET NULL'
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
    return queryInterface.dropTable('cultos_participantes');
  }
};
