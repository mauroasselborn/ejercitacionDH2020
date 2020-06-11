const express = require("express")
const router = express.Router()
const registerController = require("../controllers/registerController")
const upload = require("../middlewares/fileUploadUsrAvatar")

router.get("/", registerController.index)

//Registro de nuevo usuario
router.post("/", upload.any(), registerController.registrar)

module.exports = router
