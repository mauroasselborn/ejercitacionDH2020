const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")

router.get("/", productController.index)
router.get("/detalle/:idProducto", productController.productDetail)
router.get("/agregar", productController.productAdd)
router.get("/agregar/confirmado", productController.productAddConfirm)

module.exports = router
