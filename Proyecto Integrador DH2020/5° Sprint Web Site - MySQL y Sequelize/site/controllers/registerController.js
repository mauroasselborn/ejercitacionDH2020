const bcrypt = require("bcrypt")

const db = require("../database/models")

const registerController = {
	index: (req, res) => {
		const nombre = req.session.nombre
		db.Provinces.findAll().then((provincias) => {
			res.render("register", { nombre, provincias })
		})
	},
	//Registro de usuario
	registrar: (req, res, next) => {
		// objeto literal que almacena lo enviado a traves del formulario por peticion POST
		db.Users.create({
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 10),
			category_id: 2,
			address: req.body.address,
			birthdate: req.body.birthdate,
			city: req.body.city,
			province_id: req.body.province_id,
			zip: req.body.zip,
			image_url: `/images/usuarios/${req.files[0].filename}`,
		})

		//Redireccionamos a la vista de usuarios
		res.redirect("/")
		next()
	},
}

module.exports = registerController
