const customFunctions = require("../customFunctions");

const archivoPeliculas = customFunctions.getMovies();

let contenidoWeb = `
<head>
    <meta charset="utf-8">
</head>
<h1>Bienvenidos a DH Movies el mejor sitio para encontrar las mejores peliculas, incluso mucho mejor que Netflix, Cuevana y PopCorn</h1>
<hr>
<h2>Total de Peliculas: ${archivoPeliculas.movies.length}</h2>
<h3>Listado de Peliculas</h3>
<hr>
<ol>
`;

const peliculas = archivoPeliculas.movies
    .map((peliculas) => {
        return peliculas.title;
    })
    .sort();

for (const pelicula of peliculas) {
    contenidoWeb += `<li>${pelicula}</li>`;
}

contenidoWeb += `</ol><hr>
<p>
    Recordá que podés visitar las secciones:
   <ul>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="/">Home</a></li>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="en-cartelera">En Cartelera</a></li>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="mas-votadas">Más Votadas</a></li>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="sucursales">Sucursales</a></li>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="contacto">Contacto</a></li>
        <li style="display:inline-block; margin-right: 50px;list-style:none"><a href="preguntas-frecuentes">Preguntas Frecuentes</a></li>
    </ul>
</p>`;

module.exports = contenidoWeb;
