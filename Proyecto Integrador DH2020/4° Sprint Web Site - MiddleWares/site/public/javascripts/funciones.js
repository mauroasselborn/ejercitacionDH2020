const fs = require("fs")
const path = require("path")

module.exports.leerArchivo = (ruta) => {
	try {
		// Leemos el archivo json y lo almacenamos en la variable jsonFile
		const jsonFile = fs.readFileSync(ruta, "utf-8")

		// Si el Json esta vacio creamos un array vacio, caso contrario parseamos a objeto literal y
		// lo almacenamos en la variable archivo
		let archivo = jsonFile == "" ? [] : JSON.parse(jsonFile)
		return archivo
	} catch (error) {
		console.log(error)
		return []
	}
}
