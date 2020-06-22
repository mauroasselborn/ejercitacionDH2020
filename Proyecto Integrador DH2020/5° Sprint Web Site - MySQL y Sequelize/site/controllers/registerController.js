const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const archivo = require("../public/javascripts/funciones")
const db = require("../database/models")
const rutaArchivoUsuarios = path.join("data", "users.json")

const registerController = {
	index: (req, res) => {
		const nombre = req.session.nombre
		db.Provinces.findAll().then((provincias) => {
			res.render("register", { nombre, provincias })
		})
	},
	//Registro de usuario
	registrar: (req, res, next) => {
		const archivoUsuarios = archivo.leerArchivo(rutaArchivoUsuarios)

		// objeto literal que almacena lo enviado a traves del formulario por peticion POST
		let usuario = {
			id: archivoUsuarios.length == 0 ? 0 : archivoUsuarios[archivoUsuarios.length - 1].id + 1,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 10),
			category: "user",
			image: `/images/usuarios/${req.files[0].filename}`,
		}

		//Agregar al array el elemento creado y guardarlo en la variable usuarios
		archivoUsuarios.push(usuario)

		//Escribimos el archivo users.json agregando el nuevo elemento
		fs.writeFileSync(rutaArchivoUsuarios, JSON.stringify(archivoUsuarios))

		//Redireccionamos a la vista de usuarios
		res.redirect("/")
		next()
	},
}

module.exports = registerController
