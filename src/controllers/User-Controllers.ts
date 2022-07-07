import {Request, Response} from 'express';

class UserControllers {
  register(req: Request, res: Response): Response {
    const { firstName, lastName, npm, email, password, confirmPassword } = req.body;

    if ( !firstName || !lastName || !npm || !email || !password || !confirmPassword ) return res.status(400).json({msg : "Tolong isi semua from"});

    if ( password !== confirmPassword ) return res.status(400).json({msg : "Password dan Konfirmasi Password tidak sama"});

    return res.status(201).json({msg : "Berhasil Register"});
  }

  login(req: Request, res: Response): Response {
    const { email, password } = req.body;

    if ( !email || !password ) return res.status(400).json({msg : "Tolong isi semua from"});

    return res.status(200).json({msg : "Login Berhasil"});
  }
}

export default new UserControllers();