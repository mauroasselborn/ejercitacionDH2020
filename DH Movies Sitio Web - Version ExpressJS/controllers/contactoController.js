const fs = require("fs")
const path = require("path")

const contacto = {
	renderizar: (req, res) => {
		res.send(`Hola, has ingresado a la seccion ${req.url}`)
	},
}

module.exports = contacto
