//hago el require de la libreria fs = File System
const fs = require("fs");

//creo una funcion flecha que crea un archivo para escritura, la misma desde su creacion es exportada
module.exports.crearArchivo = () => {
    //por destructuracion creo variables, que sus valores seran ingresadas por parametros a travez del process.argv
    let [, , nombreArchivo, textoArchivo] = process.argv;
    //creo un objeto literal con las opciones por defecto en caso de que el usuario no ingrese valores por consola
    let opcPorDefecto = {
        nombreArchivo: "archivo.txt",
        textoArchivo: "texto de relleno por default"
    };
    
    //Escribo el archivo!!!
    fs.writeFileSync(nombreArchivo || opcPorDefecto.nombreArchivo, textoArchivo || opcPorDefecto.textoArchivo);
    
   /*   //Opcion 2 que me parecio mas prolija
        // guardo en una constante el archivo creado
        const archivo = fs.createWriteStream(
            nombreArchivo || opcPorDefecto.nombreArchivo
        );
        //escribo en el archivo lo que recibo por parametros
        archivo.write(textoArchivo || opcPorDefecto.textoArchivo);
    */
};

//opcional antes de que me retes jajaja
//module.exports.crearArchivo = crearArchivo;
