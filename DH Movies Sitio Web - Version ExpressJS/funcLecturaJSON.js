const fs = require("fs")
const path = require("path")

const leerArchivo = (ruta) => JSON.parse(fs.readFileSync(ruta, "utf-8"))

module.exports = {
	getMovies: () => leerArchivo(path.join(__dirname, "data/movies.json")),
	getFaqs: () => leerArchivo(path.join(__dirname, "data/faqs.json")),
	getTheaters: () => leerArchivo(path.join(__dirname, "data/theaters.json")),
}
