const fs = require("fs")
const path = require("path")

const db = require("../database/models")

const productController = {
	// Página princiapl de productos donde lista el total de elmentos leidos en el json
	index: (req, res) => {
		const nombre = req.session.nombre
		db.Products.findAll().then((products) => {
			res.render("products", {
				nombre,
				usr: req.session.usr,
				imageUsr: req.session.imageUsr,
				products,
			})
		})
	},

	// Página de detalle de productos, que muestra un producto en particular de acuerdo a su ID pasando por GET
	productDetail: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id
		const nombre = req.session.nombre

		db.Products.findByPk(idProducto, {
			include: [{ association: "products_category" }, { association: "products_size" }],
		}).then((product) => {
			res.render("productDetail", {
				nombre,
				imageUsr: req.session.imageUsr,
				usr: req.session.usr,
				product,
			})
		})
	},
	// Vista de creacion del producto
	productAdd: (req, res) => {
		const nombre = req.session.nombre

		let pC = db.ProductsCategory.findAll()
		let pS = db.ProductsSize.findAll()

		Promise.all([pC, pS]).then(([categorys, product_size]) => {
			res.render("productAdd", {
				nombre,
				imageUsr: req.session.imageUsr,
				usr: req.session.usr,
				categorys,
				product_size,
			})
		})
	},

	// Creacion de Producto //TODO: HECHO
	createProduct: (req, res, next) => {
		db.Products.create({
			name: req.body.name,
			description: req.body.description,
			category_id: req.body.category_id,
			size_id: req.body.size_id,
			origin: req.body.origin,
			alcohol: req.body.alcohol,
			ibu: req.body.ibu,
			image_url: `/images/productos/${req.files[0].filename}`,
			price: req.body.price,
		})

		res.redirect("/products")

		next()
	},
	// Vista de edicion del producto //TODO: HECHO
	editProduct: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id
		const nombre = req.session.nombre

		let pC = db.ProductsCategory.findAll()

		let p = db.Products.findByPk(idProducto)

		let pS = db.ProductsSize.findAll()

		Promise.all([pC, p, pS]).then(([products_category, product, products_size]) => {
			res.render("productEdit", {
				nombre,
				imageUsr: req.session.imageUsr,
				usr: req.session.usr,
				products_category,
				products_size,
				product,
			})
		})
	},

	// Actualizacion del producto //TODO: HECHO

	saveEditProduct: (req, res, next) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id

		db.Products.update(
			{
				name: req.body.name,
				description: req.body.description,
				category_id: req.body.category_id,
				size_id: req.body.size_id,
				origin: req.body.origin,
				alcohol: req.body.alcohol,
				ibu: req.body.ibu,
				image_url:
					req.files.length != 0 ? `/images/productos/${req.files[0].filename}` : req.body.image_url,
				price: req.body.price,
			},
			{
				where: {
					id: idProducto,
				},
			},
		)

		//Redireccionamos a la vista de productos
		res.redirect("/products/" + idProducto)
		next()
	},

	// Eliminacion del producto //FIXME: HACIENDO
	removeProduct: (req, res) => {
		// variable que almacena el id pasando por parametro desde el router
		let idProducto = req.params.id

		db.Products.findByPk(idProducto).then((product) => {
			imgUrl = product.image_url
		})

		db.Products.destroy({
			where: {
				id: idProducto,
			},
		})

		//Eliminar imagen del directorio
		// fs.unlinkSync(imgUrl)
		//Una vez borrado el archivo redireccionamos a la vista de productos.
		res.redirect("/products")
	},
}

module.exports = productController
