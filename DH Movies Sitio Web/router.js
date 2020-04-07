const secciones = require("./src/index");

module.exports.rutas = (req) => {
    let seccion;
    switch (req.url) {
        case "/":
        case "/home":
            seccion = secciones.homePage;
            break;
        case "/en-cartelera":
            seccion = secciones.enCartelera;
            break;
        case "/mas-votadas":
            seccion = secciones.masVotados;
            break;
        case "/sucursales":
            seccion = secciones.sucursales;
            break;
        case "/contacto":
            seccion = secciones.contacto;
            break;
        case "/preguntas-frecuentes":
            seccion = secciones.preguntasFrecuentes;
            break;
        default:
            seccion = `<h1><strong style="background-color: red;color:white;">Error 404, Pagina No Encontrada</strong></h1>`;
            break;
    }
    return seccion;
};
