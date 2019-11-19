import * as Yup from 'yup';

import Membro from '../models/Membro';
import Endereco from '../models/Endereco';
import Arquivo from '../models/Arquivo';
import Status from '../models/Status';

class MembroController {
  async index(req, res) {
    const { id } = req.body;

    if (id) {
      const membro = await Membro.findByPk(id, {
        attributes: ['id', 'nome', 'email', 'data_nascimento', 'idade'],
        include: [
          {
            model: Status,
            as: 'status',
            attributes: ['id', 'descricao']
          },
          {
            model: Endereco,
            as: 'endereco',
            attributes: [
              'id',
              'logradouro',
              'numero',
              'bairro',
              'cep',
              'cidade',
              'uf'
            ]
          },
          {
            model: Arquivo,
            as: 'avatar',
            attributes: ['nome_arquivo', 'diretorio', 'url']
          }
        ]
      });
      return res.status(200).json(membro);
    }
    const membros = await Membro.findAll({
      attributes: ['id', 'nome', 'email', 'data_nascimento', 'idade'],
      include: [
        {
          model: Status,
          as: 'status',
          attributes: ['id', 'descricao']
        },
        {
          model: Endereco,
          as: 'endereco',
          attributes: [
            'id',
            'logradouro',
            'numero',
            'bairro',
            'cep',
            'cidade',
            'uf'
          ]
        },
        {
          model: Arquivo,
          as: 'avatar',
          attributes: ['nome_arquivo', 'diretorio', 'url']
        }
      ]
    });
    return res.json(membros);
  }

  async store(req, res) {
    const schema = Yup.object().shape({
      nome: Yup.string().required(),
      email: Yup.string()
        .required()
        .email(),
      dataNascimento: Yup.date().required(),
      telefone: Yup.string().required()
    });

    if (!(await schema.isValid(req.body))) {
      return res.status(400).json({
        error:
          'Falha na validação dos dados. Verifique se preencheu todos os campos'
      });
    }
    const { nome, email, dataNascimento, telefone } = req.body;

    const membro = await Membro.create({
      nome,
      email,
      data_nascimento: dataNascimento,
      telefone
    });

    return res.json(membro);
  }
}

export default new MembroController();
