const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const archivo = require("../public/javascripts/funciones")
const rutaArchivoUsuarios = path.join("data", "users.json")

const loginController = {
	index: (req, res) => {
		let login = true
		const nombre = req.session.nombre
		res.render("login", { nombre, login })
	},

	//Validacion de login
	validar: (req, res, next) => {
		const archivoUsuarios = archivo.leerArchivo(rutaArchivoUsuarios)
		const email = req.body.email
		const password = req.body.password
		const nombre = req.session.nombre
		let login
		req.session.login = false

		let usuario = archivoUsuarios.find((usr) => usr.email == email)

		if (usuario != undefined) {
			if (bcrypt.compareSync(password, usuario.password)) {
				req.session.nombre = usuario.first_name
				login = true
				req.session.login = true
				req.session.usr = usuario.category
				req.session.imageUsr = usuario.image
			} else login = false
		} else login = false
		// TODO: Agregar cookies para persistencia de logueo
		if (login) {
			res.redirect("/")
		} else res.render("login", { nombre, login, mensaje: "Error al Identificar Usuario!!" })
		next()
	},
	logout: (req, res) => {
		req.session.destroy()
		res.redirect("/")
	},
}

module.exports = loginController
