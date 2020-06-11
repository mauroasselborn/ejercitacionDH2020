const registerController = {
	index: (req, res) => {
		res.render("register")
	},
	regCorrecto: (req, res) => {
		res.render("correctRegister", { nombre: req.params.nombre })
	},
}

module.exports = registerController
