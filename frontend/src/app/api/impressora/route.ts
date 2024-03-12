import { prisma } from "@/services/database"
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    const token = req.cookies.get('authjs.session-token');

    if (!token) {
        return Response.json({ message: "Unauthorized" }, { status: 401 });
    }

    const isValidToken = await validateToken(token);

    if (!isValidToken) {
        return Response.json({ message: "Invalid token" }, { status: 401 });
    }

    try {
        const impressoras = await prisma.impressoras.findMany()
        return Response.json({impressoras})
    } catch (error) {
        return Response.json({
            message:"Error",
            error
        },
        {
            status: 500
        }
        )
    }
}

export const POST = async (req: Request) => {
    const json = await req.json()
    return Response.json(json)
}

// Função para validar o token
async function validateToken(token: any): Promise<boolean> {
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