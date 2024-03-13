import { prisma } from "@/services/database"

export async function validateToken(token: any): Promise<boolean> {
    try {
        // Consulta o banco de dados para verificar se o token existe na tabela de usuários
        const user = await prisma.session.findUnique({ where: { sessionToken: token } });

        if (!user || new Date(user.expires) < new Date()) {
            return false;
        }
        return true;
    } catch (error) {
        console.error("Error validating token:", error);
        return false;
    }
}