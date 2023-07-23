import { Router } from "express";
import productCtrl from '../controller/product.controller.js'
import priceCtrl from '../controller/price.controller.js'
import VerifySP from "../middleware/SpecialPrice.js";
const router = Router()

router.get('/products', productCtrl) // Ruta de los productos

router.get('/:user_id/:nombre_producto', VerifySP, priceCtrl) // Ruta de los precios especiales

export default router