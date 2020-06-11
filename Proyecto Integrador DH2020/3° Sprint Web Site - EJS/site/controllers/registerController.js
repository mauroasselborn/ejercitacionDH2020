const registerController = {
	index: (req, res) => {
		const nombre = req.session.nombre
		res.render("register", { nombre })
	},
	regCorrecto: (req, res) => {
		const nombre = req.session.nombre
		res.render("correctRegister", { nombre })
	},
}

module.exports = registerController
