const express = require("express")
const router = express.Router()
const loginController = require("../controllers/loginController")

router.get("/", loginController.index)

//Validacion por post del login
router.post("/validar", loginController.validar)
//fin de session
router.post("/logout", loginController.logout)

module.exports = router
