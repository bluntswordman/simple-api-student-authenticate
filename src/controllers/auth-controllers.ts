import { Request, Response } from "express";
import bcrypt from 'bcrypt';
const { students } = require('../db/models');

class Authenticate {
  register = async (req: Request, res: Response): Promise<Response> => {
    const { firstName, lastName, npm, email, password, confirmPassword } = req.body;

    if ( !firstName || !lastName || !npm || !email || !password || !confirmPassword ) return res.status(400).json({msg : "Tolong isi semua from"});
    
    if ( password !== confirmPassword ) return res.status(400).json({msg : "Password dan Konfirmasi Password tidak sama"});

    const hashPassword = await bcrypt.hash(password, 10);

    try {
      const user = await students.findOne({
        where: {
          email: email
        }
      });

      if ( user ) return res.status(400).json({msg : "Email sudah terdaftar"});

      await students.create({
        firstname: firstName,
        lastname: lastName,
        npm: npm,
        email: email,
        password: hashPassword
      });

      return res.status(201).json({msg : "Register Berhasil"});
    } catch (error) {
      return res.status(500);
    }
  }

  login = async (req: Request, res: Response): Promise<Response> => {
    const { email, password } = req.body;

    if ( !email || !password ) return res.status(400).json({msg : "Tolong isi semua from"});

    try {
      const user = await students.findOne({
        where: {
          email: email
        }
      });

      if (!user) return res.status(400).json({msg : "Email tidak terdaftar"});

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) return res.status(400).json({msg : "Password salah"});

      return res.status(200).json({msg : "Login Berhasil"});
    } catch (error) {
      return res.status(500)
    }
  }
}

export default new Authenticate();