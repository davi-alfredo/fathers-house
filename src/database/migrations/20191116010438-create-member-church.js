module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('membros', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
      },
      nome: {
        type: Sequelize.STRING,
        allowNull: false
      },
      telefone: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true
      },
      data_nascimento: {
        type: Sequelize.DATEONLY,
        allowNull: false
      },
      id_endereco: {
        type: Sequelize.INTEGER,
        allowNull: true,
        REFERENCES: { MODEL: 'enderecos', key: 'id' },
        onUpload: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_avatar: {
        type: Sequelize.INTEGER,
        allowNull: true,
        REFERENCES: { MODEL: 'arquivos', key: 'id' },
        onUpload: 'CASCADE',
        onDelete: 'SET NULL'
      },
      id_situacao: {
        type: Sequelize.INTEGER,
        allowNull: false,
        defaultValue: 0,
        REFERENCES: { MODEL: 'status_padrao', key: 'id' },
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
    return queryInterface.dropTable('membros');
  }
};
