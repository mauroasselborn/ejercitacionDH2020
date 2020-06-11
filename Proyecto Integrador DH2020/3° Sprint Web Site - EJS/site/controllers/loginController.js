const fs = require("fs")
const path = require("path")
const bcrypt = require("bcrypt")
const rutaArchivoUsuarios = path.join(__dirname, "../data/users.json")

// Leemos el archivo users.json y lo almacenamos en la variable jsonUsuarios
const jsonUsuarios = fs.readFileSync(rutaArchivoUsuarios, "utf-8")

// Si el jsonUsuarios esta vacio creamos un array vacio, caso contrario parseamos a objeto literal y almacenamos en archivoUsuarios
let archivoUsuarios = jsonUsuarios == "" ? [] : JSON.parse(jsonUsuarios)

const loginController = {
	index: (req, res) => {
		const nombre = req.session.nombre
		res.render("login", { nombre })
	},

	//Validacion de login
	validar: (req, res) => {
		const email = req.body.email
		const password = req.body.password
		const nombre = req.session.nombre
		let usuario = archivoUsuarios.find((usr) => usr.email == email)
		let login
		if (usuario != undefined) {
			if (bcrypt.compareSync(password, usuario.password)) {
				req.session.nombre = usuario.first_name
				login = true
			} else login = false
		} else login = false

		res.render("loginTF", { login, nombre })
	},

	//Registro de usuario
	registrar: (req, res, next) => {
		// objeto literal que almacena lo enviado a traves del formulario por peticion POST
		let usuario = {
			id: archivoUsuarios.length,
			first_name: req.body.first_name,
			last_name: req.body.last_name,
			email: req.body.email,
			password: bcrypt.hashSync(req.body.password, 10),
			// category: req.body.category,
			// image: `/images/usuarios/${req.files[0].filename}`,
		}

		//Agregar al array el elemento creado y guardarlo en la variable usuarios
		archivoUsuarios.push(usuario)

		//Escribimos el archivo users.json agregando el nuevo elemento
		fs.writeFileSync(rutaArchivoUsuarios, JSON.stringify(archivoUsuarios))

		//Redireccionamos a la vista de usuarios
		res.redirect("/")
	},
	// Vista de edicion del producto
	editProduct: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id
		const nombre = req.session.nombre
		const producto = archivoProductos.find((producto) => producto.id == idProducto)

		res.render("productEdit", { producto, nombre })
	},
}

module.exports = loginController
