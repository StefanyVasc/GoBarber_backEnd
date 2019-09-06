import { Router } from 'express';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = new Router();

routes.post('/users', UserController.store);

// rota para logar
routes.post('/sessions', SessionController.store);

// middleware global que serve apenas para as rotas abaixo
routes.use(authMiddleware);
// rota para edição de usuários
routes.put('/users', UserController.update);

export default routes;
