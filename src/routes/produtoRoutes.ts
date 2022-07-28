import{Router} from 'express';

import * as produtoControllers from '../controller/produtoController';

const router = Router();
router.get('/', produtoControllers.home)
router.post('/cadastro',produtoControllers.createProduct);
router.get('/estoque', produtoControllers.stockList);
router.get('/estoque/:id', produtoControllers.stockItem)
router.put('/estoqueUpdate/:id', produtoControllers.stockUpdate)
router.delete('/estoqueDelete/:id',produtoControllers.removeItem)

export default router;