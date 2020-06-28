const LocalStorage = require("node-localstorage").LocalStorage
const localStorage = new LocalStorage("./localStorage")
const db = require("../database/models")

//Variable Global de Carrito
let items = new Array()

const cartController = {
	index: (req, res) => {
		const nombre = req.session.nombre

		if (localStorage) {
		}

		let productsCartList = new Array()
		let producto = {}
		let cart = JSON.parse(localStorage.getItem("carrito"))
		let cantTotalProducts = 0
		let totalPrice = 0

		if (req.session.usr) {
			db.Products.findAll().then((products) => {
				for (let i = 0; i < products.length; i++) {
					for (let j = 0; j < cart.length; j++) {
						if (products[i].id == cart[j].id) {
							cantTotalProducts += cart[j].cantidad

							totalPrice += products[i].price * cart[j].cantidad

							producto = {
								name: products[i].name,
								price: products[i].price,
								image_url: products[i].image_url,
								cantidad: cart[j].cantidad,
							}

							productsCartList.push(producto)
							break
						}
					}
				}

				res.render("productCart", {
					nombre,
					imageUsr: req.session.imageUsr,
					usr: req.session.usr,
					productsCartList,
					cantTotalProducts,
					totalPrice: totalPrice.toFixed(2),
					usrId: req.session.usrId ? req.session.usrId : "",
				})
			})
		} else
			res.render("login", {
				mensaje: "Debes estar logueado para poder acceder al carrito",
				login: false,
				usrId: req.session.usrId ? req.session.usrId : "",
			})
	},

	addCart: (req, res) => {
		const idProduct = Number(req.params.idProduct)
		localStorage.removeItem("carrito")

		let encontrado = false

		if (items.length) {
			for (let i = 0; i < items.length; i++) {
				if (items[i].id === idProduct) {
					items[i].cantidad++
					encontrado = true
					break
				}
			}
		}

		if (!encontrado) {
			let item = {
				id: idProduct,
				cantidad: 1,
			}

			items.push(item)
		}

		localStorage.setItem("carrito", JSON.stringify(items))

		res.redirect("/products" + "#producto" + idProduct)
	},
}

module.exports = cartController
