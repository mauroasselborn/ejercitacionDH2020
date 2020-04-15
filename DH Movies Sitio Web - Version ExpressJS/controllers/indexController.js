const fs = require("fs")
const path = require("path")

const indexController = {
	mostrar: (req, res) => {
		const movies = JSON.parse(fs.readFileSync(path.join(__dirname, "../data/movies.json")))

		let param = Number(req.params.id)
		res.render("index", movies.movies[param])
	},
}

module.exports = indexController
