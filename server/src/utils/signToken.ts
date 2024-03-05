import jwt from 'jsonwebtoken';

interface UserPayload {
  username: string;
}

export const signToken = (userPayload: UserPayload): string => {
  const secret = 'seuSegredo'; // Troque pelo seu segredo real
  const token = jwt.sign(userPayload, secret, { expiresIn: '1h' }); // Configure o tempo de expiração conforme necessário
  return token;
};