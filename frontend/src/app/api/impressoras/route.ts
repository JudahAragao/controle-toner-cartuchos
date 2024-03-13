import { prisma } from "@/services/database"
import { validateToken } from "@/validateToken";
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    const authorizationHeader = req.headers.get('Authorization');

    const validate = await validateToken(authorizationHeader)

    if (!validate) {
        return Response.json({
            message:"Acesso não Autorizado",
        },
        {
            status: 401
        })
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
        })
    }
}

export const POST = async (req: Request) => {
    const data = await req.json();
    const novaImpressora = await prisma.impressoras.create({
        data
    })

    return Response.json({
        message: 'Impressora criada com sucesso',
        impressora: novaImpressora,
      });
}

// Função para validar o token
