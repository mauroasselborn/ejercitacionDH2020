const express = require("express")
const router = express.Router()
const registerController = require("../controllers/registerController")

router.get("/", registerController.index)
router.get("/registro-correcto/:nombre?", registerController.regCorrecto)

module.exports = router
