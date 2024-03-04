import { PrismaClient } from "@prisma/client";
import { Data } from "../types/AbastecimentoTypes";

export default class TonerService {

    private prisma = new PrismaClient()

    // Consultar todos os abastecimentos
    public async getAll(): Promise<Data[]> {
        return await this.prisma.abastecimentos.findMany({})
    }

    // Consultar um cartucho específico
    public async getById(id: string) {
        return await this.prisma.abastecimentos.findUnique({
            where: {
                id
            }
        })
    }

    // Cadastrar um cartucho
    public async insert(data: Data) {
        return await this.prisma.abastecimentos.create({
            data
        })
    }

    // Atualizar dados cartucho
    public async update(id: string, data:Data) {
        return await this.prisma.abastecimentos.update({
            where:{
                id
            },
            data
        })
    }

    // Deletar um cartucho
    public async delete(id: string) {
        await this.prisma.cartuchos.delete({
        where: {
            id
        }
    })
    }
}