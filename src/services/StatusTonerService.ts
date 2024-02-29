import { PrismaClient } from "@prisma/client";
import { Data } from '../types/StatusTonerTypes'

export default class StatusTonerService {

    private prisma = new PrismaClient()

    // Consultar todos os statusCartuchos
    public async getAll() {
        return await this.prisma.statusCartuchos.findMany({})
    }

    // Consultar um status específico
    public async getById(id: string) {
        return await this.prisma.statusCartuchos.findUnique({
            where: {
                id
            }
        })
    }

    // Cadastrar um status
    public async insert(data: Data) {
        return await this.prisma.statusCartuchos.create({
            data
        })
    }

    // Atualizar dados status
    public async update(id: string, data:Data) {
        return await this.prisma.statusCartuchos.update({
            where:{
                id
            },
            data
        })
    }

    // Deletar um status
    public async delete(id: string) {
        await this.prisma.statusCartuchos.delete({
        where: {
            id
        }
    })
    }
}