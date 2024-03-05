import 'reflect-metadata';
import { JsonController, Res, Post, Body } from 'routing-controllers';
import bcrypt from 'bcryptjs';
import { Response } from 'express';
import { PrismaClient } from '@prisma/client';
import { signToken } from '../utils/signToken';

@JsonController('/auth')
export class AuthController {

  private prisma = new PrismaClient();

  @Post('/login')
  async login(@Body() credentials: { username: string; password: string }, @Res() res: Response) {
    try {
      const user = await this.prisma.users.findUnique({
        where: { username: credentials.username },
      });

      if (!user) {
        return res.status(401).json({ message: 'Usuário não encontrado' });
      }

      const passwordMatch = await bcrypt.compare(credentials.password, user.password);

      if (!passwordMatch) {
        return res.status(401).json({ message: 'Credenciais inválidas' });
      }

      const token = signToken(user); // Implemente a função para gerar o token JWT

      return res.json({ token });
    } catch (error) {
      console.error('Erro durante o login:', error);
      return res.status(500).json({ message: 'Erro interno do servidor' });
    }
  }
}