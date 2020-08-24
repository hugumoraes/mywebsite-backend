import { Router } from 'express';

import SessionController from './app/controllers/SessionController';

import authMiddleware from './app/middlewares/auth';

const routes = Router();

routes.post('/auth', SessionController.store);

routes.get('/', authMiddleware, (req, res) => {
  return res.json({ message: 'Authenticated' });
});

export default routes;
