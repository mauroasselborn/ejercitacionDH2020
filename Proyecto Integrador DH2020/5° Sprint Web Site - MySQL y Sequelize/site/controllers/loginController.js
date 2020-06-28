const bcrypt = require("bcrypt")
const db = require("../database/models")

const loginController = {
	index: (req, res) => {
		let login = true
		res.render("login", { login })
	},

	//Validacion de login
	validar: (req, res) => {
		const nombre = req.session.nombre
		let login

		req.session.login = false

		db.Users.findOne({
			where: {
				email: req.body.email,
			},
		})
			.then((user) => {
				if (user != null) {
					if (bcrypt.compareSync(req.body.password, user.password)) {
						req.session.nombre = user.first_name
						login = true
						req.session.login = true
						req.session.usr = user.category_id
						req.session.imageUsr = user.image_url
						req.session.usrId = user.id
					} else login = false
				} else login = false

				if (login) {
					res.redirect("/")
				} else {
					res.render("login", { nombre, login, mensaje: "Error al Identificar Usuario!!" })
				}
			})
			.catch((error) => {
				console.log(error)
			})
	},
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	},
}

module.exports = loginController
