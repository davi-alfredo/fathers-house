import * as Yup from 'yup';
import Culto from '../models/Culto';
import Membro from '../models/Membro';

class CultoController {
  async index(req, res) {
    const cultos = await Culto.findAll();
    return res.json(cultos);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      descricao: Yup.string().required(),
      data: Yup.date().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Falha na validação dos dados de entrada' });
    }
    const {
      descricao,
      data,
      preleitor,
      oferta,
      abertura,
      louvor,
      valor_oferta
    } = req.body;

    const culto = await Culto.create({
      descricao,
      data,
      preleitor,
      oferta,
      abertura,
      louvor,
      valor_oferta
    });

    return res.json(culto);
  }

  async update(req, res) {
    const schema = Yup.object().shape({
      descricao: Yup.string().required(),
      data: Yup.date().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res
        .status(400)
        .json({ error: 'Falha na validação dos dados de entrada' });
    }

    const culto = await Culto.findByPk(req.params.idCulto);
    if (!culto) {
      return res.status(400).json({ error: 'Culto não encontrado' });
    }

    const {
      descricao,
      data,
      preleitor,
      oferta,
      abertura,
      louvor,
      valor_oferta,
      tipo_culto
    } = req.body;

    await culto.update({
      descricao,
      data,
      preleitor,
      oferta,
      abertura,
      louvor,
      valor_oferta,
      tipo_culto
    });

    const participante = await Membro.findByPk(req.params.idParticipante);
    if (!participante) {
      return res.status(200).json({ error: 'Membro não encontrado' });
    }

    await culto.addParticipante(participante);

    return res.json(culto);
  }
}

export default new CultoController();
