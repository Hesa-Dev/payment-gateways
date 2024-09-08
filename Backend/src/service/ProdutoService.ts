
// import {PrismaClient}  from "@prisma/client"
import {PrismaClient} from "@prisma/client"
// import { Produto } from "@prisma/client"
import dataTime from "../utils/utils";


interface ProdutoReq {
    name: string,
    description: String,
    price: number,
    qtdade: number
    image: String
}
class ProdutoService {

    private  prismaclient =  new PrismaClient ();

    async add(produto: ProdutoReq) {

        if (produto) {
            // verificar se nome do produto ja existe 
            const prodName  = await this.prismaclient.produto.findMany({
                where:{name:produto.name}
            })

            if(!prodName){

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

                return  prod
            }

            throw new Error("PRODUTO EXISTE");
        }

        throw new Error("CAMPOS VAZIOS");

    }
}





export { ProdutoService }