import Arquivo from '../models/Arquivo';
// import Membro from '../models/Membro';

class ArquivoController {
  async store(req, res) {
    const { originalname: nome_arquivo, filename: diretorio } = req.file;

    const arquivo = await Arquivo.create({
      nome_arquivo,
      diretorio
    });

    // const membro = await Membro.findByPk(req.params.id);
    // const id_arquivo = arquivo.id;
    // await membro.update({ id_arquivo });

    return res.json({ arquivo });
  }
}

export default new ArquivoController();
