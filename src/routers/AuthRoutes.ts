import BaseRoutes from './BaseRoutes';
import Authenticate from '../controllers/auth-controllers';

class AuthenticatedRoute extends BaseRoutes {
  public routes(): void {
    this.router.post('/register', Authenticate.register);
    this.router.post('/login', Authenticate.login);
  }
}

export default new AuthenticatedRoute().router;

