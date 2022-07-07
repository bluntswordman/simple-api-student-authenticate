import { verify } from "jsonwebtoken";
import { Request, Response, NextFunction } from "express";

class AuthMiddleware {
  verifyToken = async (req: Request, res: Response, next: NextFunction) => {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if (!token) return res.status(401).json({ msg: "Token tidak ditemukan" });

    try {
      const decoded = verify(token, `${process.env.SECRET_KEY}`);
      req.body.user = decoded;
      next();
    } catch (error) {
      return res.status(401).json({ msg: "Token tidak valid" });
    }
  }
}

export default new AuthMiddleware();