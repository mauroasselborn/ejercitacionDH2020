const multer = require("multer")
const path = require("path")

//Se crea el middleware de file upload con multer
const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		cb(null, path.join(__dirname, "../public/images/usuarios"))
	},
	filename: function (req, file, cb) {
		cb(null, Date.now() + path.extname(file.originalname))
	},
})

const upload = multer({ storage })

module.exports = upload
