const express = require("express")
const router = express.Router()
const productController = require("../controllers/productController")
const upload = require("../middlewares/fileUploadProducts")

// /products --> GET
router.get("/", productController.index)

// /products --> POST
router.post("/", upload.any(), productController.createProduct)

// /products/create --> GET
router.get("/create", productController.productAdd)

// /products/:id --> GET
router.get("/:id", productController.productDetail)

// /products/:id --> DELETE
router.delete("/:id", productController.removeProduct)

// /products/:id --> PUT
router.put("/:id", upload.any(), productController.saveEditProduct)

// /products/:id/edit --> GET
router.get("/:id/edit", productController.editProduct)

module.exports = router
