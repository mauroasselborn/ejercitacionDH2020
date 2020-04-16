const fs = require("fs")
const path = require("path")
const fileHeroes = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/heroes.json")))

const heroesController = {
	index: (req, res) => {
		const config = {
			titulo: "Heroes",
			fileHeroes,
		}

		res.render("heroes", config)
	},
	mostrarDetalles: (req, res) => {
		const id = Number(req.params.id)
		const ok = req.params.ok
		let texto = ""

		if (id > 0 && id <= fileHeroes.length) {
			for (let i = 0; i < fileHeroes.length; i++) {
				if (fileHeroes[i].id == id) {
					texto = `"Hola, mi nombre es ${fileHeroes[i].nombre} y soy ${fileHeroes[i].profesion}".​<br>`
					if (ok) {
						texto += `Reseña: ${fileHeroes[i].resenia}`
					} else texto += `"Lamento que no desees saber más de mi :(".<br>`
				}
			}
		} else {
			texto = `"No encontramosun héroe para mostrarte su biografía"`
		}
		res.send(texto)
	},
}

module.exports = heroesController
