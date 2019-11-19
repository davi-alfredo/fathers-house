module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'tipos_cultos',
      [
        {
          id: 1,
          descricao: 'Culto da Família',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 2,
          descricao: 'Conexão de Jovens',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 3,
          descricao: 'Conexão de Mulheres',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 4,
          descricao: 'Conexão de Homens',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 5,
          descricao: 'Conexão Teens',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: () => {}
};
