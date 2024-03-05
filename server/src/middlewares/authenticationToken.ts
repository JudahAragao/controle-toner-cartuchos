import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';

const authenticateToken = (req: Request, res: Response, next: NextFunction): any => {
  const token = req.header('Authorization');
  if (!token) return res.sendStatus(401);

  jwt.verify(token!, 'seuSegredo', (err: jwt.VerifyErrors | null, user: any) => {
    if (err) return res.sendStatus(403);
    req.body.user = user;
    next();
  });
};

export default authenticateToken;