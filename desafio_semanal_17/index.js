const fs = require("fs");
const path = require("path");

let nameFile = process.argv[2];
let action = process.argv[3];
let contenidoIngresado = process.argv[4];


console.log(`
Ingresar datos en el siguiente orden separados por un espacio:
1- node index.js
2-Nombre de el nuevo archivo o archivo existente
3-Accion a realizar (escribir, leer, agregar o eliminar)
4-Contenido de el archivo`);

const rutaDelArchivo = path.join(__dirname, "files", `${nameFile}.txt`);

// Sobrescribe el contenido de un archivo existente o lo crea en el caso de no existir.
const escribirContenido = (contenido) => {
    fs.writeFile(rutaDelArchivo, contenido, "utf8", (error) => {
        if (error) {
            console.log("Error al escribir contenido en el archivo");
        }

        console.log(`\nContenido escrito correctamente en: desafio_semanal_17/file/${nameFile}.txt\n`);
    });
};

const leerContenido = () => {
    fs.readFile(rutaDelArchivo, "utf8", (error, result) => {
        if (error) {
            console.log("Error al leer el archivo");
        }

        console.log(`\n${result}\n`);
    });
};

const agregarContenido = (contenido) => {
    fs.appendFile(rutaDelArchivo, contenido, "utf8", (error) => {
        if (error) {
            console.log("Error al agregar contenido en el archivo");
        }

        console.log(`\nContenido agregado a: ${nameFile}.txt\n`);
    });
};

const eliminarArchivo = () => {
    fs.unlink(rutaDelArchivo, (error) => {
        if (error) {
            console.log("Error al eliminar el archivo");
        }

        console.log(`\nArchivo con nombre ${nameFile}.txt ha sido eliminado correctamente \n`);
    });
};

const probarFS = () => {

switch (action) {
    case "escribir":
         escribirContenido(`${contenidoIngresado}\n`);
        break;

        case "leer":
            leerContenido();;
        break;

        case "agregar":
            agregarContenido(`\n${contenidoIngresado}\n`);
        break;

        case "eliminar":
            eliminarArchivo();
        break;

    default:
        console.log(`\n Por favor siga las instrucciones descritas arriba para usar esta aplicacion \n`);
        break;
}

};

probarFS();

