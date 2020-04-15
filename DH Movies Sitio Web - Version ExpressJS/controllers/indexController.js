const movies = require("../funcLecturaJSON")

const peliculas = movies.getMovies()

const indexController = {
	index: (req, res) => {
		res.render("index", { pelis: peliculas.movies, titulo: "Bienvenidos" })
	},
}

module.exports = indexController
