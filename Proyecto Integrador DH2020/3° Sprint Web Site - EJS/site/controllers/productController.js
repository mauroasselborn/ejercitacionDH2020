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

const productController = {
	// Página princiapl de productos donde lista el total de elmentos leidos en el json
	index: (req, res) => {
		const nombre = req.session.nombre
		res.render("products", { archivoProductos: leerArchivoProductos(), nombre })
	},

	// Página de detalle de productos, que muestra un producto en particular de acuerdo a su ID pasando por GET
	productDetail: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id
		const nombre = req.session.nombre
		const archivoProductos = leerArchivoProductos()
		// variable que almacena el producto encontrado dentro del archivo json
		const producto = archivoProductos.find((producto) => producto.id == idProducto)

		res.render("productDetail", { producto, nombre })
	},
	// Vista de creacion del producto
	productAdd: (req, res) => {
		const nombre = req.session.nombre
		res.render("productAdd", { nombre })
	},
	// Creacion de Producto
	createProduct: (req, res, next) => {
		const archivoProductos = leerArchivoProductos()
		// objeto literal que almacena lo enviado a traves del formulario por peticion POST
		let producto = {
			id: archivoProductos.length,
			name: req.body.name,
			description: req.body.description,
			category: req.body.category,
			medida: req.body.medida,
			origen: req.body.origen,
			alcohol: req.body.alcohol,
			ibu: req.body.ibu,
			image: `/images/productos/${req.files[0].filename}`,
			price: req.body.price,
			cantidad: 0,
		}

		//Agregar al array el elemento creado y guardarlo en la variable producto
		archivoProductos.push(producto)

		//Escribimos el archivo products.json agregando el nuevo elemento
		fs.writeFileSync(rutaArchivoProducto, JSON.stringify(archivoProductos))

		//Redireccionamos a la vista de productos
		res.redirect("/products")
	},
	// Vista de edicion del producto
	editProduct: (req, res) => {
		const archivoProductos = leerArchivoProductos()
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id
		const nombre = req.session.nombre
		const producto = archivoProductos.find((producto) => producto.id == idProducto)

		res.render("productEdit", { producto, nombre })
	},

	// Actualizacion del producto
	saveEditProduct: (req, res, next) => {
		const archivoProductos = leerArchivoProductos()
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id

		//Se busca el elemento dentro del array de productos devolviendo
		let productUpdate = archivoProductos.findIndex((producto) => producto.id == idProducto)

		//Se actualiza el archivo que contiene el producto en cuestion

		archivoProductos[productUpdate].name = req.body.name
		archivoProductos[productUpdate].description = req.body.description
		archivoProductos[productUpdate].category = req.body.category
		archivoProductos[productUpdate].medida = req.body.medida
		archivoProductos[productUpdate].origen = req.body.origen
		archivoProductos[productUpdate].alcohol = req.body.alcohol
		archivoProductos[productUpdate].ibu = req.body.ibu

		//Validacion de imagen
		if (req.files.length != 0) {
			archivoProductos[productUpdate].image = `/images/productos/${req.files[0].filename}`
		}

		archivoProductos[productUpdate].price = req.body.price

		//Escribimos el archivo products.json agregando el nuevo elemento
		fs.writeFileSync(rutaArchivoProducto, JSON.stringify(archivoProductos))

		//Redireccionamos a la vista de productos
		res.redirect("/products")
	},

	// Eliminacion del producto
	removeProduct: (req, res) => {
		let archivoProductos = leerArchivoProductos()
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id

		//Eliminar imagen del directorio
		let productoABorrar = archivoProductos.find((producto) => producto.id == idProducto)
		let rutaImagen = productoABorrar.image
		fs.unlinkSync(path.join(__dirname, "..", "public", rutaImagen))

		//Hacemos un filtro para que se cree un nuevo array con todos los elementos menos el del id pasado por parametro.
		archivoProductos = archivoProductos.filter((producto) => producto.id != idProducto)

		//Escribimos el archivo products.json agregando el nuevo elemento
		fs.writeFileSync(rutaArchivoProducto, JSON.stringify(archivoProductos))

		//Una vez borrado el archivo redireccionamos a la vista de productos.
		res.redirect("/products")
	},
}

module.exports = productController
