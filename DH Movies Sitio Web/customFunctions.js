const fs = require("fs");

const leerArchivo = (ruta) => JSON.parse(fs.readFileSync(ruta, "utf-8"));

const getMovies = leerArchivo(__dirname + "/data/movies.json");
const getFaqs = leerArchivo(__dirname + "/data/faqs.json");
const getTheaters = leerArchivo(__dirname + "/data/theaters.json");

module.exports = {
    getMovies: getMovies,
    getFaqs: getFaqs,
    getTheaters: getTheaters,
};

/* for (const key in getMovies.movies) {
    console.log(getMovies.movies[key].original_title);
    console.log(getMovies.movies[key].vote_average);
}
 */
