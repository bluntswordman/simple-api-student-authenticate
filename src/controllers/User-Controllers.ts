import { Response, Request } from 'express';
const { students } = require('../db/models');

class User {
  getUser = async(req: Request, res: Response): Promise<Response> => {
    try {
      const user = await students.findAll({
        attributes: ['id', 'firstname', 'lastname', 'npm', 'email']
      });
      if (!user) return res.status(400).json({msg : "Data tidak ditemukan"});
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500);
    }
  }

  getUserbyId = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      const user = await students.findOne({
        where: { id },
        attributes: ['id', 'firstname', 'lastname', 'npm', 'email']
      });
      if (!user) return res.status(400).json({msg : "Data tidak ditemukan"});
      return res.status(200).json(user);
    } catch (error) {
      return res.status(500);
    }
  }

  updateUser = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;
    const { firstname, lastname, npm, email } = req.body;

    try {
      await students.update({
        firstname: firstname || students.firstname, 
        lastname: lastname || students.lastname,
        npm: npm || students.npm,
        email: email || students.email
      }, { where: { id }});
      return res.status(200).json({msg : "Data berhasil di perbaharui"});
    } catch (error) {
      return res.status(500);
    }
  }

  deleteUser = async(req: Request, res: Response): Promise<Response> => {
    const { id } = req.params;

    try {
      await students.destroy({ where: { id }});
      return res.status(200).json({msg : "Data berhasil dihapus"});
    } catch (error) {
      return res.status(500);
    }
  }
}

export default new User();