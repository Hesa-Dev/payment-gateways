import { Router } from "express";
import { ProdutoController } from "./controller/ProdutoController";
import { UserController } from "./controller/UserController";
import { ClientController } from "./controller/ClientController";
import { VendaController } from "./controller/VendaController";




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
router.get('/produto',  new ProdutoController().getAll)
router.post('/produto/add',  new ProdutoController().add)
router.post('/produto/edit',  new ProdutoController().update)
router.delete('/produto/delete',  new ProdutoController().delete)
router.get('/produto/id',  new ProdutoController().getProdutoByID)
router.get('/produto/categoria',  new ProdutoController().listarCategoria)
router.get('/produto/carrinho',  new ProdutoController().addCarrinho)

// *******************VENDA ******************* //
router.get('/venda',  new VendaController().getAll)
router.post('/venda/add',  new VendaController().add)
router.post('/venda/edit',  new VendaController().update)
router.delete('/venda/delete',  new VendaController().delete)

export { router };