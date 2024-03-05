import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcryptjs';

const prisma = new PrismaClient();

const initializeData = async (): Promise<void> => {
  try {
    // Verificar se um usuário específico já existe no banco de dados
    const existingUser = await prisma.users.findUnique({
      where: { username: 'admceti' }, // Substitua 'usuario1' pelo nome de usuário que você deseja verificar
    });

    // Se o usuário não existir, adicionar dados iniciais
    if (!existingUser) {
        const hashedPassword = await bcrypt.hash('CetiCgm@123', 10);

      await prisma.users.create({
        data: { username: 'admceti', password: hashedPassword },
      });

      console.log('Dados iniciais definidos com sucesso.');
    } else {
      console.log(`Usuário '${existingUser.username}' já existe. Nenhuma ação realizada.`);
    }
  } catch (error) {
    console.error('Erro ao definir dados iniciais:', error);
  } finally {
    await prisma.$disconnect();
  }
};


export default initializeData;