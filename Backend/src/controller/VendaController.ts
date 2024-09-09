import { VendaService } from "../service/VendaService";
import { Request, Response } from "express";

export class VendaController {

    private vendaS = new VendaService()

    async add(req: Request, res: Response) {

        const vendaService = new VendaService();

        const {
            name,
            description,
            adress,
            email,
            payment,
            transport,
            total
        } = req.body
        const sender = await vendaService.add({
            name,
            description,
            adress,
            email,
            payment,
            transport,
            total
        })
        return res.json(sender)
    }

    async delete(req: Request, res: Response) {

        const vendaService = new VendaService();

        const { id } = req.body
        const sender = vendaService.delete(id)
        // const sender  = await this.produtoS.delete(id) 
        return res.json(sender)
    }

    async getAll(req: Request, res: Response) {

        const vendaService = new VendaService();

        const sender = await vendaService.getAll()
        return res.json(sender)
    }

    async update(req: Request, res: Response) {

        const vendaService = new VendaService();

        const {
            name,
            description,
            adress,
            email,
            payment,
            transport,
            total
        } = req.body

        const sender = await vendaService.update({
            name,
            description,
            adress,
            email,
            payment,
            transport,
            total
        })

        return res.json(sender)
    }
}