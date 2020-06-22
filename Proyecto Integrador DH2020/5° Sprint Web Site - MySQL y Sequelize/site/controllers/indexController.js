const indexController = {
	index: (req, res) => {
		const nombre = req.session.nombre

		res.render("index", { nombre, imageUsr: req.session.imageUsr, usr: req.session.usr })
	},
}

module.exports = indexController
