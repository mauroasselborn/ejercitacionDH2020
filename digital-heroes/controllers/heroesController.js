const fs = require("fs")
const path = require("path")
const fileHeroes = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/heroes.json")))

const heroesController = {
	index: (req, res) => {
		res.render("heroes", { fileHeroes, mostrar: 1, titulo: "Heroes" })
	},
	mostrarDetalles: (req, res) => {
		const id = Number(req.params.id) //|| 1
		let texto = ""

		if (id > 0 && id <= fileHeroes.length) {
			const heroe = fileHeroes.find((heroe) => heroe.id === id) //|| 1

			texto = `"Hola, mi nombre es ${heroe.nombre} y soy ${heroe.profesion}".​`
		} else {
			texto = `"No se encontró el id: ${id}"`
		}
		res.render("heroes", { texto, mostrar: 2, titulo: "Detalles Heroes" })
	},
	mostrarBio: (req, res) => {
		const id = Number(req.params.id) //|| 1
		const ok = req.params.ok
		let texto = ""

		if (id > 0 && id <= fileHeroes.length) {
			const heroe = fileHeroes.find((heroe) => heroe.id === id) // || 1
			if (ok === "ok") {
				texto = `Nombre: ${heroe.nombre}`
				texto += ` - Reseña: ${heroe.resenia}`
			} else {
				texto = `Nombre: ${heroe.nombre}, "Lamento que no desees saber más de mi :(".`
			}
		} else {
			texto = `No encontramosun héroe para mostrarte su biografía`
		}
		res.render("heroes", { texto, mostrar: 3, titulo: "Biografía Heroes" })
	},
}

module.exports = heroesController
