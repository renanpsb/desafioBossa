import UserControler from './app/controllers/UserController';
import ToolController from './app/controllers/ToolController';
import SessionController from './app/controllers/SessionController';
import authMiddleware from './app/middlewares/auth';

const { Router } = require('express');

const routes = new Router();

routes.get('/', (req, res) => {
  res.json({ message: 'Bem vindo API do desafio Bossa' });
});

routes.post('/users', UserControler.store);

routes.post('/login', SessionController.store);

routes.use(authMiddleware);

routes.get('/tools', ToolController.index);
routes.post('/tools', ToolController.store);
routes.delete('/tools/:id', ToolController.delete);

export default routes;
