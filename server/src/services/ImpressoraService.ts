import { PrismaClient } from "@prisma/client";
import { Data } from "../types/ImpressoraTypes";

export default class TonerService {

    private prisma = new PrismaClient()

    // Consultar todos os impressoras
    public async getAll(): Promise<Data[]> {
        return await this.prisma.impressoras.findMany({})
    }

    // Consultar um cartucho específico
    public async getById(id: string) {
        return await this.prisma.impressoras.findUnique({
            where: {
                id
            }
        })
    }

    // Cadastrar um cartucho
    public async insert(data: Data) {
        return await this.prisma.impressoras.create({
            data
        })
    }

    // Atualizar dados cartucho
    public async update(id: string, data:Data) {
        return await this.prisma.impressoras.update({
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