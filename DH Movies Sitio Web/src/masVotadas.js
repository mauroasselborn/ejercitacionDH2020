const customFunctions = require("../customFunctions");

const archivoPeliculas = customFunctions.getMovies();

const masVotadas = archivoPeliculas.movies.filter(
    (peliculas) => peliculas.vote_average >= 7
);

let acumRating = 0;
for (let i = 0; i < masVotadas.length; i++) {
    acumRating += masVotadas[i].vote_average;
}

let contenidoWeb = `
<head>
    <meta charset="utf-8">
</head>
<h1>Más Votadas</h1>
<hr>
<h2>Total de Peliculas: ${masVotadas.length}</h2>
<h2>Rating Promedio: ${(acumRating / masVotadas.length).toFixed(2)}</h2>
<h3>Listado de Peliculas</h3>
<hr>
<ol>
`;

for (const pelicula in masVotadas) {
    contenidoWeb += `
    <li>
        Titulo: ${masVotadas[pelicula].title}<br/>
        Puntuacion: ${masVotadas[pelicula].vote_average}<br/>
        Reseña: ${masVotadas[pelicula].overview}
    </li><br/>
    `;
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
