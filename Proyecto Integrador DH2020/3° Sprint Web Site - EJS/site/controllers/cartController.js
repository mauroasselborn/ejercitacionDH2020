const fs = require("fs")
const path = require("path")
const rutaArchivoProducto = path.join(__dirname, "../data/products.json")

function leerArchivoProductos() {
	// Leemos el archivo products.json y lo almacenamos en la variable jsonProducts
	const jsonProducts = fs.readFileSync(path.join(__dirname, "../data/products.json"), "utf-8")

	// Si el jsonProducts esta vacio creamos un array vacio, caso contrario parseamos a objeto literal y almacenamos en archivoProductos
	let archivoProductos = jsonProducts == "" ? [] : JSON.parse(jsonProducts)
	return archivoProductos
}

const cartController = {
	index: (req, res) => {
		const nombre = req.session.nombre
		let contCant = 0

		if (req.session.carrito == undefined) {
			req.session.carrito = []
			console.log(req.session.carrito)
		}
		//Recorro el array para sumar la cantidad de elementos
		for (let i = 0; i < req.session.carrito.length; i++) {
			contCant += req.session.carrito[i].cantidad
		}

		res.render("productCart", { nombre, carrito: req.session.carrito, contCant })
	},
	addCart: (req, res) => {
		// Leemos el archivo products.json y lo almacenamos en la variable jsonProducts
		const archivoProductos = leerArchivoProductos()

		//Declaracion global de session para el array de carrito
		if (req.session.carrito == undefined) {
			req.session.carrito = new Array()
		}

		const idProduct = req.params.idProduct

		let producto = archivoProductos.find((product) => product.id == idProduct)
		//Si el producto ya existe en el array session solo se le suma la cantidad, caso contrario, se agrega el elemento al array
		if (req.session.carrito.find((product) => product.id == idProduct) == undefined) {
			producto.cantidad++
			req.session.carrito.push(producto)
			console.log("carrito: ", req.session.carrito)
		} else {
			req.session.carrito.forEach((element) => {
				if (element.id == idProduct) {
					element.cantidad++
				}
			})
		}

		res.redirect("/products")
	},
}

module.exports = cartController
