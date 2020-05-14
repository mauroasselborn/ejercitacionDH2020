const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cartController")

router.get("/:idProducto?", cartController.index)

module.exports = router
