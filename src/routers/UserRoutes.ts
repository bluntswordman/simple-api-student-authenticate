import BaseRoutes from './BaseRoutes';
import User from '../controllers/user-controllers';

class UsersRoute extends BaseRoutes {
  public routes(): void {
    this.router.get('/', User.getUser);
    this.router.get('/:id', User.getUserbyId);
    this.router.put('/:id', User.updateUser);
    this.router.delete('/:id', User.deleteUser);
  }
}

export default new UsersRoute().router;