import Router from 'express';
import multer from 'multer';
import multerConfig from './config/multer';
import MembroController from './app/controllers/MembroController';
import EnderecoController from './app/controllers/EnderecoController';
import ArquivoController from './app/controllers/ArquivoController';
import CultoController from './app/controllers/CultoController';

const routes = new Router();
const upload = multer(multerConfig);
routes.get('/membros', MembroController.index);
routes.post('/membros', MembroController.store);

routes.get('/membros/:id/enderecos/:idEndereco', EnderecoController.index);
routes.post('/membros/:id/enderecos', EnderecoController.store);

routes.post(
  '/membros/:id/arquivos',
  upload.single('file'),
  ArquivoController.store
);

routes.get('/cultos', CultoController.index);
routes.post('/cultos', CultoController.store);

routes.put(
  '/cultos/:idCulto/participantes/:idParticipante',
  CultoController.update
);

export default routes;
