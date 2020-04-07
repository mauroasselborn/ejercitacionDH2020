const customFunctions = require("../customFunctions");

const archivoPeliculas = customFunctions.getMovies();

let contenidoWeb = `
<head>
    <meta charset="utf-8">
</head>
<h1>En Cartelera</h1>
<hr>
<h2>Total de Peliculas: ${archivoPeliculas.movies.length}</h2>
<h3>Listado de Peliculas</h3>
<hr>
<ol>
`;

for (const pelicula in archivoPeliculas.movies) {
    contenidoWeb += `
    <li>
        ${archivoPeliculas.movies[pelicula].title}<br/>
        ${archivoPeliculas.movies[pelicula].overview}
    </li>
    `;
}

contenidoWeb += `</ol><hr>
<p>
    Recordá que podés visitar las secciones:
    <ul>
        <li style="display:inline-block; margin-right: 50px;list-style:none">En Cartelera</li>
        <li style="display:inline-block; margin-right: 50px;list-style:none">Más Votadas</li>
        <li style="display:inline-block; margin-right: 50px;list-style:none">Sucursales</li>
        <li style="display:inline-block; margin-right: 50px;list-style:none">Contacto</li>
        <li style="display:inline-block; margin-right: 50px;list-style:none">Preguntas Frecuentes</li>
    </ul>
</p>`;

module.exports = contenidoWeb;
