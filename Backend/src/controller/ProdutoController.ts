


import { ProdutoService } from "../service/ProdutoService";
import { Request, Response } from "express";

class ProdutoController {

    async add(req: Request, res: Response) {

        const produto = new ProdutoService()
        const { name, description, price, qtdade, image } = req.body

        const sender  = await produto.add({ name, description, price, qtdade, image }) 
        return res.json(sender)

    }

    async getAll() {
        return ""
    }

    async edit() {

        return ""
    }
    async delete() {

        return ""
    }

}

export { ProdutoController }