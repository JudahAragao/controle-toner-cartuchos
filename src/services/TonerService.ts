import { PrismaClient } from "@prisma/client";
import { Data } from "../types/TonerTypes";

export default class TonerService {

    private prisma = new PrismaClient()

    // Consultar todos os cartuchos
    public async getAll(): Promise<Data[]> {
        return await this.prisma.cartuchos.findMany({})
    }

    // Consultar todos os cartuchos com o mesmo status
    public async getAllById(statusCartuchoId: string) {
        return await this.prisma.cartuchos.findMany({
            where: {
                statusCartuchoId
            }
        })
    }

    // Consultar um cartucho específico
    public async getById(id: string) {
        return await this.prisma.cartuchos.findUnique({
            where: {
                id
            }
        })
    }

    // Cadastrar um cartucho
    public async insert(data: Data) {
        return await this.prisma.cartuchos.create({
            data
        })
    }

    // Atualizar dados cartucho
    public async update(id: string, data:Data) {
        return await this.prisma.cartuchos.update({
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