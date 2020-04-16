const express = require("express")
const router = express.Router()
const heroesController = require("../controllers/heroesController")

/* GET home page. */
router.get("/", heroesController.index)
router.get("/detalle/:id/:ok?", heroesController.mostrarDetalles)

module.exports = router
