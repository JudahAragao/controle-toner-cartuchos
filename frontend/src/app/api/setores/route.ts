import { prisma } from "@/services/database"
import { NextRequest } from "next/server";

export const GET = async (req: NextRequest) => {

    // const session = await auth()
    // console.log(session)

    // if (!session) {
    //     return Response.json({message: 'Acesso não autorizado'})
    // }

    try {
        const setores = await prisma.setores.findMany()
        return Response.json({setores})
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
    const novoSetor = await prisma.setores.create({
        data
    })

    return Response.json({
        message: 'Setores criada com sucesso',
        setor: novoSetor,
      });
}

// Função para validar o token
