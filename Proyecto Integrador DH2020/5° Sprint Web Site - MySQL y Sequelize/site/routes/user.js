const express = require("express")
const router = express.Router()
const userController = require("../controllers/userController")
const upload = require("../middlewares/fileUploadUsrAvatar")

/* GET users listing. */
router.get("/", userController.index)

router.get("/useredit/:idUser", userController.editView)
router.put("/usereditadm/:idUser", userController.updateadm)
router.put("/usereditusr/:idUser", upload.any(), userController.updateusr)
router.delete("/delete/:idUser", userController.delete)
// router.get("/edit/:idUser", userController.edit)

// router.put("/update/:idUser", userController)

module.exports = router
