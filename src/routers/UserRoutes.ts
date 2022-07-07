import BaseRoutes from './BaseRoutes';
import User from '../controllers/user-controllers';
import AuthMiddleware from '../middleware/AuthMiddleware';

class UsersRoute extends BaseRoutes {
  public routes(): void {
    this.router.get('/', AuthMiddleware.verifyToken, User.getUser);
    this.router.get('/:id', AuthMiddleware.verifyToken, User.getUserbyId);
    this.router.put('/:id', AuthMiddleware.verifyToken, User.updateUser);
    this.router.delete('/:id', AuthMiddleware.verifyToken, User.deleteUser);
  }
}

export default new UsersRoute().router;