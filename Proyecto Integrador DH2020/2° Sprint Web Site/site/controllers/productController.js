const fs = require("fs")
const path = require("path")
const archivoProductos = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/productos.json"), "utf-8"))

const productController = {
	index: (req, res) => {
		res.render("products", { archivoProductos })
	},
	productDetail: (req, res) => {
		let idProducto = req.params.idProducto

		archivoProductos.forEach((producto) => {
			if (producto.id == idProducto) {
				res.render("productDetail", { producto })
			}
		})
	},

	productAdd: (req, res) => {
		res.render("productAdd")
	},

	productAddConfirm: (req, res) => {
		let literal = {
			id: archivoProductos.length,
			nombre: `${req.query.nombre}`,
			resenia: `${req.query.resenia}`,
			presentacion: `${req.query.presentacion}`,
			medida: `${req.query.medida}`,
			origen: `${req.query.origen}`,
			alcohol: `${req.query.alcohol}`,
			ibu: `${req.query.ibu}`,
			img: `/images/productos/${archivoProductos.length}.png`,
		}
		archivoProductos.push(literal)

		fs.writeFileSync(path.join(__dirname, "../data/productos.json"), JSON.stringify(archivoProductos))

		res.redirect("/productos")
	},
}

module.exports = productController
