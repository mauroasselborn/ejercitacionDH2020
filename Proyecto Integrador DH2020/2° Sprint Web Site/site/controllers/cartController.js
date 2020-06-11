const cartController = {
	index: (req, res) => {
		let producto = req.params.idProducto
		res.render("productCart", { producto })
	},
}

module.exports = cartController
