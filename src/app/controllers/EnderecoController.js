import * as Yup from 'yup';

import Membro from '../models/Membro';
import Endereco from '../models/Endereco';

class EnderecoController {
  async index(req, res) {
    const { idEndereco } = req.params;

    if (!idEndereco) {
      return res
        .status(400)
        .json({ error: 'Código do endereço não informado' });
    }

    const endereco = await Endereco.findByPk(idEndereco);
    return res.json(endereco);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      logradouro: Yup.string().required(),
      numero: Yup.number().required(),
      bairro: Yup.string().required(),
      cidade: Yup.string().required(),
      uf: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Falha na validação dos dados. Verifique se preencheu todos os campos'
      });
    }
    const {
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep
    } = req.body;

    const endereco = await Endereco.create({
      logradouro,
      numero,
      complemento,
      bairro,
      cidade,
      uf,
      cep
    });

    const membro = await Membro.findByPk(req.params.id);

    if (!membro) {
      return res.status(400).json({ error: 'Membro não existe!' });
    }

    const id_endereco = endereco.id;
    await membro.update({ id_endereco });

    return res.json(endereco);
  }
}

export default new EnderecoController();
