const express = require("express")
const router = express.Router()
const cartController = require("../controllers/cartController")

router.get("/:idProduct?", cartController.index)

router.post("/:idProduct/addCart", cartController.addCart)

module.exports = router
