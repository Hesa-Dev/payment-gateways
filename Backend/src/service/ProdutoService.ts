
// import {PrismaClient}  from "@prisma/client"
import { PrismaClient } from "@prisma/client"
// import { Produto } from "@prisma/client"
import dataTime from "../utils/utils";


interface ProdutoReq {
    id?: number
    name: string,
    description: String,
    price: number,
    qtdade: number
    image: String
}
export class ProdutoService {

    private prismaclient = new PrismaClient();

    async add(produto: ProdutoReq) {

        if (produto) {
            // verificar se nome do produto ja existe 
            const prodName = await this.prismaclient.produto.findMany({
                where: { name: produto.name }
            })

            if (!prodName) {

                const prod = await this.prismaclient.produto.create({
                    data: {
                        name: produto.name,
                        price: produto.price,
                        qtdade: produto.qtdade,
                        description: produto.description?.toString(),
                        image: produto.image?.toString(),
                        createdAt: dataTime()
                    }
                })

                return prod
            }

            throw new Error("PRODUTO EXISTE");
        }

        throw new Error("CAMPOS VAZIOS");

    }
    async update(produto: ProdutoReq) {

        if (produto.id) {
            // verificar se id do produto  
            const prodID = await this.prismaclient.produto.findMany({
                where: { id: produto.id }
            })
            if (prodID) {

                const updateProduto = this.prismaclient.produto.update({
                    where: { id: produto.id },
                    data: {
                        name: produto.name,
                        price: produto.price,
                        qtdade: produto.qtdade,
                        description: produto.description?.toString(),
                        image: produto.image?.toString(),
                        updatedAt: dataTime()
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
            const prodID = await this.prismaclient.produto.findMany({
                where: { id }
            })

            if (prodID) {

                const prodDelete = await this.prismaclient.produto.delete({
                    where: { id }
                })

                // const success = "apagado " + prodID
                return "apagado " + prodID
            }
            throw new Error("ID N/EXISTE");
        }
        throw new Error("ID INVALIDO");
    }

    async getAll() {

        const produtos = await this.prismaclient.produto.findMany({
            select: {
                name: true,
                price: true,
                qtdade: true,
                description: true,
                image: true,
            }
        })
        if (produtos) {
            return produtos

        }
        throw new Error("ERRO NA BUSCA ");
    }
}
