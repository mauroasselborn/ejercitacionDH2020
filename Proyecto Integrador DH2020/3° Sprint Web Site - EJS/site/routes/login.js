const express = require("express")
const router = express.Router()
const loginController = require("../controllers/loginController")
const upload = require("../middlewares/fileUpload")

router.get("/", loginController.index)

//Validacion por post del login
router.post("/validar", loginController.validar)

//Registro de nuevo usuario
router.post("/registrar", upload.any(), loginController.registrar)

module.exports = router
