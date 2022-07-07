import { Request, Response } from "express";
import cuid from 'cuid';
import bcrypt from 'bcrypt';

class Authenticate {
  register(req: Request, res: Response): Response {
    const { firstName, lastName, npm, email, password, confirmPassword } = req.body;

    if ( !firstName || !lastName || !npm || !email || !password || !confirmPassword ) return res.status(400).json({msg : "Tolong isi semua from"});
    if ( password !== confirmPassword ) return res.status(400).json({msg : "Password dan Konfirmasi Password tidak sama"});
    
    const id = cuid();
    const hashPassword = bcrypt.hashSync(password, 10);

    try {
      return res.status(201).json({msg : "Register Berhasil"});
    } catch (error) {
      return res.status(500)
    }
  }

  login(req: Request, res: Response): Response {
    const { email, password } = req.body;

    if ( !email || !password ) return res.status(400).json({msg : "Tolong isi semua from"});

    return res.status(200).json({msg : "Login Berhasil"});
  }

  logout(req: Request, res: Response): Response {
    return res.status(200).json({msg : "Logout Berhasil"});
  }
}

export default new Authenticate();