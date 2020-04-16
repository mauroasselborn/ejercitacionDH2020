const config = {
	titulo: "home",
	mensaje:
		"Ni Superman, IronMan o La Mujer Maravilla son tan importantes cómo las y los Heroes de carne y hueso que encontrarás en este sitio. Esperamos que ellas y ellos te sirvan como inspiración para poder cumplir tus objetivos. Recuerda: ¡nunca pares de creer en ti!.",
}

const indexController = {
	index: (req, res) => {
		res.render("index", config)
	},
}

module.exports = indexController
