const indexController = {
	index: (req, res) => {
		const nombre = req.session.nombre

		res.render("index", {
			nombre,
			imageUsr: req.session.imageUsr,
			usr: req.session.usr,
			usrId: req.session.usrId ? req.session.usrId : "",
		})
	},
}

module.exports = indexController
