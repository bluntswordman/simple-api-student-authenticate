import { Router } from 'express';
import Irouter from './RouterInterface';
import UserControllers from '../controllers/User-Controllers';

class UserRoutes implements Irouter {
  public router: Router;

  constructor() {
    this.router = Router();
    this.routes();
  }

  public routes(): void {
    this.router.post('/register', UserControllers.register);
    this.router.post('/login', UserControllers.login);
  }
}

export default new UserRoutes().router;