

import { Request, Response } from "express";
import { ProdutoService } from "../service/ProdutoService";

class UserController {

    async teste(req: Request, res: Response) {

        return res.json("hello teste express")
    }

    async add (){

        return ""
    }

    async getAll (){

        return ""
    }

    async edit (){

        return ""
    }
    async delete (){

        return ""
    }

}

export { UserController }