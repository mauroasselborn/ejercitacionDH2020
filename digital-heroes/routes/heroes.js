const express = require("express")
const router = express.Router()
const heroesController = require("../controllers/heroesController")

/* GET home page. */
router.get("/", heroesController.index)
router.get("/detalle/:id?", heroesController.mostrarDetalles)
router.get("/bio/:id?/:ok?", heroesController.mostrarBio)

module.exports = router
