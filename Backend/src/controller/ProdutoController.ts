


import { ProdutoService } from "../service/ProdutoService";
import { Request, Response } from "express";

class ProdutoController {

    private produtoS = new ProdutoService()

    async add(req: Request, res: Response) {

        const produtoService = new ProdutoService();

        const {
            name,
            description,
            price,
            qtdade,
            image,
            category 
        } = req.body

        const sender = await produtoService.add({
            name,
            description,
            price,
            qtdade,
            image,
            category
        })
        return res.json(sender)

    }

    async update(req: Request, res: Response) {

        const { name, description, price, qtdade, image, id } = req.body
        const sender = await this.produtoS.update({ name, description, price, qtdade, image, id })

        return res.json(sender)
    }

    async getAll(req: Request, res: Response) {

        const produtoService = new ProdutoService();

        const sender = await produtoService.getAll()
        return res.json(sender)
    }

    async delete(req: Request, res: Response) {

        const produtoService = new ProdutoService();

        const { id } = req.body
        const sender = produtoService.delete(id)
        // const sender  = await this.produtoS.delete(id) 
        return res.json(sender)
    }

    async getProdutoByID (req: Request, res: Response) {

        const produtoService = new ProdutoService();
        const id = Number( req.query.id)
        const sender =  await produtoService.getProdutoByID(id)
        return res.json(sender)
    }

}

export { ProdutoController }