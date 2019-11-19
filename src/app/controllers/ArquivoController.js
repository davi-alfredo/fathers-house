import Arquivo from '../models/Arquivo';
import Membro from '../models/Membro';

class ArquivoController {
  async store(req, res) {
    const { originalname: nome_arquivo, filename: diretorio } = req.file;

    const membro = await Membro.findByPk(req.params.id);

    if (!membro) {
      return res.status(400).json({ error: 'Membro não existe!' });
    }

    const arquivo = await Arquivo.create({
      nome_arquivo,
      diretorio
    });

    const id_avatar = arquivo.id;
    await membro.update({ id_avatar });

    return res.json({ arquivo });
  }
}

export default new ArquivoController();
