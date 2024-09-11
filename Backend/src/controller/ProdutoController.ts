
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

        const produtoService = new ProdutoService();

        const { name, description, price, category, qtdade, image, id } = req.body
        const sender = await produtoService.update({ name, description, price, category, qtdade, image, id })

        // console.log("name : " , name , "id : " , id);

        return res.json(sender)
    }

    async getAll(req: Request, res: Response) {

        const produtoService = new ProdutoService();

        const sender = await produtoService.getAll()
        return res.json(sender)
    }

    async delete(req: Request, res: Response) {

        const produtoService = new ProdutoService();

        // const { id } = req.body
        const id = Number(req.query.id)
        const sender = produtoService.delete(id)
        return res.json(sender)
    }

    async getProdutoByID(req: Request, res: Response) {

        const produtoService = new ProdutoService();
        const id = Number(req.query.id)
        const sender = await produtoService.getProdutoByID(id)
        return res.json(sender)
    }

    async listarCategoria(req: Request, res: Response) {

        const produtoService = new ProdutoService();
        const categoria = req.query.categoria?.toString()
        const sender = await produtoService.listarCategoria(categoria)
        return res.json(sender)

    }

    async addCarrinho(req: Request, res: Response) {

        const produtoService = new ProdutoService();
        var ids = req.query.ids  // result ['1', '2', '3']

        if (ids) {

            if (Array.isArray(ids)) {

                const idsArrays: any = ids.map(Number);
                // console.log("numberArray : ", idsArrays);
                const sender = await produtoService.addCarrinho(idsArrays)
                return res.json(sender)
            }
        }
    }
}

export { ProdutoController }