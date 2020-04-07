const fs = require("fs");

const leerArchivo = (ruta) => JSON.parse(fs.readFileSync(ruta, "utf-8"));

module.exports = {
    getMovies: () => leerArchivo(__dirname + "/data/movies.json"),
    getFaqs: () => leerArchivo(__dirname + "/data/faqs.json"),
    getTheaters: () => leerArchivo(__dirname + "/data/theaters.json"),
};
