const express = require("express")
const router = express.Router()
const indexController = require("../controllers/indexController")

router.get("/:id?", indexController.mostrar)

module.exports = router
