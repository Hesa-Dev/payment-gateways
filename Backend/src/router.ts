import { Router } from "express";
import { ProdutoController } from "./controller/ProdutoController";
import { UserController } from "./controller/UserController";
import { ClientController } from "./controller/ClientController";


const router = Router();

// *******************TEST ******************* //
router.get('/teste',  new UserController().teste)


// *******************USER ******************* //
router.post('/user',  new UserController().getAll)
router.post('/user/add',  new UserController().add)
router.post('/user/edit',  new UserController().edit)
router.post('/user/delete',  new UserController().delete)

// *******************CLIENTE ******************* //
router.post('/client',  new ClientController().getAll)
router.post('/client/add',  new ClientController().add)
router.post('/client/edit',  new ClientController().edit)
router.post('/client/delete',  new ClientController().delete)

// *******************PRODUTO ******************* //
router.post('/produto',  new ProdutoController().getAll)
router.post('/produto/add',  new ProdutoController().add)
router.post('/produto/edit',  new ProdutoController().edit)
router.post('/produto/delete',  new ProdutoController().delete)

// *******************VENDA ******************* //
router.post('/venda',  new UserController().getAll)
router.post('/venda/add',  new UserController().add)
router.post('/venda/edit',  new UserController().edit)
router.post('/venda/delete',  new UserController().delete)

export { router };