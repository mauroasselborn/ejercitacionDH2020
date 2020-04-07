const customFunctions = require("../customFunctions");

const archivoFaqs = customFunctions.getFaqs();

let contenidoWeb = `
<head>
    <meta charset="utf-8">
</head>
<h1>Preguntas Frecuentes</h1>
<hr>
<h2>Total de preguntas: ${archivoFaqs.faqs.length}</h2>
<h3>Listado de Sucursales</h3>
<hr>
<ol>
`;

for (const faq in archivoFaqs.faqs) {
    contenidoWeb += `
    <li>
        Pregunta: ${archivoFaqs.faqs[faq].faq_title}<br/>
        Respuesta: ${archivoFaqs.faqs[faq].faq_answer}<br/>
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
