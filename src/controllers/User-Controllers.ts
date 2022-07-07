import { Response, Request } from 'express';

class User {
  getUser(req: Request, res: Response): Response {
    return res.status(200).json({msg : "Get User Berhasil"});
  }

  getUserbyId(req: Request, res: Response): Response {
    return res.status(200).json({msg : "Get User by Id Berhasil"});
  }

  updateUser(req: Request, res: Response): Response {
    return res.status(200).json({msg : "Update User Berhasil"});
  }

  deleteUser(req: Request, res: Response): Response {
    return res.status(200).json({msg : "Delete User Berhasil"});
  }
}

export default new User();