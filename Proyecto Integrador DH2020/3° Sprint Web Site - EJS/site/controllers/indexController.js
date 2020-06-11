const indexController = {
	index: (req, res) => {
		const nombre = req.session.nombre

		res.render("index", { nombre })
	},
}

module.exports = indexController
