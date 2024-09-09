
// import {PrismaClient}  from "@prisma/client"
import { PrismaClient } from "@prisma/client"
// import { Produto } from "@prisma/client"
import dataTime from "../utils/utils";

interface VendaProps {
    id?: number
    name?: string,
    email?: String,
    adress?: String
    payment: string,
    total: number
    description: String
    transport?: number
}

export class VendaService {

    private prismaclient = new PrismaClient();

    async add(venda: VendaProps) {

        if (venda) {

            const venda_add = await this.prismaclient.venda.create({
                data: {
                    name: venda.name,
                    email: venda.email?.toString(),
                    adress: venda.adress?.toString(),
                    total: venda.total,
                    description: venda.description?.toString(),
                    payment: venda.payment,
                    createdAt: dataTime()
                }
            })

            return venda_add
        }

    }

    async update(venda: VendaProps) {

        if (venda.id) {
            // verificar se id do produto  
            const venda_id = await this.prismaclient.produto.findMany({
                where: { id: venda.id }
            })
            if (venda_id) {

                const updateProduto = this.prismaclient.venda.update({
                    where: { id: venda.id },
                    data: {
                        name: venda.name?.toString(),
                        email: venda.email?.toString(),
                        adress: venda.adress?.toString(),
                        total: venda.total,
                        description: venda.description?.toString(),
                        payment: venda.payment,
                        createdAt: dataTime()
                    }
                })

                return updateProduto
            }
            throw new Error("ID N/EXISTE");
        }

        throw new Error("ID INVALIDO");
    }

    async delete(id: number) {

        if (id) {
            // verificar se id do produto  
            const vendADD = await this.prismaclient.venda.findMany({
                where: { id }
            })

            if (vendADD) {

                const prodDelete = await this.prismaclient.venda.delete({
                    where: { id }
                })
                // const success = "apagado " + prodID
                return "apagado " + vendADD
            }
            throw new Error("ID N/EXISTE");
        }
        throw new Error("ID INVALIDO");
    }

    async getAll() {

        const vendas = await this.prismaclient.venda.findMany({
            select: {
                id:true,
                name: true,
                total: true,
                description: true,
                payment:true,
                createdAt:true
            }
        })
        if (vendas) {
            return vendas

        }
        throw new Error("ERRO NA BUSCA ");
    }

}

