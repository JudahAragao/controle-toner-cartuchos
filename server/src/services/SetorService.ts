import { PrismaClient } from "@prisma/client";
import { Data } from '../types/SetorTypes'

export default class StatusTonerService {

    private prisma = new PrismaClient()

    // Consultar todos os setores
    public async getAll() {
        return await this.prisma.setores.findMany({})
    }

    // Consultar um status específico
    public async getById(id: string) {
        return await this.prisma.setores.findUnique({
            where: {
                id
            }
        })
    }

    // Cadastrar um status
    public async insert(data: Data) {
        return await this.prisma.setores.create({
            data
        })
    }

    // Atualizar dados status
    public async update(id: string, data:Data) {
        return await this.prisma.setores.update({
            where:{
                id
            },
            data
        })
    }

    // Deletar um status
    public async delete(id: string) {
        await this.prisma.setores.delete({
        where: {
            id
        }
    })
    }
}