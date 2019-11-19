module.exports = {
  up: QueryInterface => {
    return QueryInterface.bulkInsert(
      'status',
      [
        {
          id: 0,
          descricao: 'Ativo',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          id: 1,
          descricao: 'Inativo',
          created_at: new Date(),
          updated_at: new Date()
        }
      ],
      {}
    );
  },
  down: () => {}
};
