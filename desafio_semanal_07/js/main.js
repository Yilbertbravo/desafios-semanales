let titulo = document.querySelector("title");
console.log(titulo.innerHTML);

let integrantes = document.querySelectorAll("dd");

// Variables Integrante Numero 1
let primerNombre1 = integrantes[0].innerHTML;
let segundoNombre1 = integrantes[1].innerHTML;
let primerApellido1 = integrantes[2].innerHTML;
let segundoApellido1 = integrantes[3].innerHTML;

//Variables Integrante Numero 2
let primerNombre2 = integrantes[4].innerHTML;
let segundoNombre2 = integrantes[5].innerHTML;
let primerApellido2 = integrantes[6].innerHTML;
let segundoApellido2 = integrantes[7].innerHTML;

//array integrante 1
let integrante1 = [primerNombre1, segundoNombre1, primerApellido1, segundoApellido1];

//array integrante 2
let integrante2 = [primerNombre2, segundoNombre2, primerApellido2, segundoApellido2];

let numeroLista1 = "Integrante 1: ";
let numeroLista2 = "Integrante 2: ";

// Funcion para Mostrar los nombres
integranteElegido(integrante1, numeroLista1);
integranteElegido(integrante2, numeroLista2);

function integranteElegido(int, numeroLista) {
    for (let i = 0; i < int.length; i++) {
        if (int[0] !== "" && int[1] !== "" && int[2] !== "" && int[3] !== "") {
            console.log(numeroLista + '"' + integranteN(int[0]) + " " + integranteN(int[1]) + " " + integranteA(int[2]) + " " + integranteA(int[3]) + '"');
        } else if (int[0] !== "" && int[1] === "" && int[2] !== "" && int[3] !== "") {
            console.log(numeroLista + '"' + integranteN(int[0]) + " " + integranteA(int[2]) + " " + integranteA(int[3]) + '"');
        } else if (int[0] != "" && int[1] === "" && int[2] != "" && int[3] === "") {
            console.log(numeroLista + '"' + integranteN(int[0]) + " " + integranteA(int[2]) + '"');
        } else if (int[0] != "" && int[1] !== "" && int[2] !== "" && int[3] === "") {
            console.log(numeroLista + '"' + integranteN(int[0]) + " " + integranteN(int[1]) + " " + integranteA(int[2]) + '"');
        }

    }
}



//Funcion Cambio de color de fondo de Nombres
function alterStyle(elem, resaltador) {
    if (resaltador === "rojo") {
        elem.style.background = "#af2439";
    } else elem.style.background = "#0000ff";
}


//Comparacion de igualdad en los nombres
for (let i = 0; i < 1; i++) {

    if (integrante1[0] === integrante2[0]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(integrantes[0], rojo);
            alterStyle(integrantes[4], rojo);
        }

    } else if (integrante1[1] === integrante2[0]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(integrantes[0], rojo);
            alterStyle(integrantes[5], rojo);
        }
    } else if (integrante1[0] === integrante2[1]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(integrantes[1], rojo);
            alterStyle(integrantes[4], rojo);
        }

    } else if (integrante1[1] === integrante2[1]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(integrantes[1], rojo);
            alterStyle(integrantes[5], rojo);
        }
    }

    else {
        console.log("No Existen coincidencias en los nombres");
        alert("Desea comparar los Apellidos");

        if (integrante1[2] === integrante2[2]) {
            console.log("Existen coincidencias en los Apellidos");
            let color = prompt("Escriba azul para resaltar coincidencias");
            if (color === "azul") {
                alterStyle(integrantes[2]);
                alterStyle(integrantes[6]);
            }

        } else if (integrante1[3] === integrante2[2]) {
            console.log("Existen coincidencias en los Apellidos");
            let color = prompt("Escriba azul para resaltar coincidencias");
            if (color === "azul") {
                alterStyle(integrantes[2]);
                alterStyle(integrantes[7]);
            }
        } else if (integrante1[2] === integrante2[3]) {
            console.log("Existen coincidencias en los Apellidos");
            let color = prompt("Escriba azul para resaltar coincidencias");
            if (color === "azul") {
                alterStyle(integrantes[3]);
                alterStyle(integrantes[6]);
            }

        } else if (integrante1[3] === integrante2[3]) {
            console.log("Existen coincidencias en los Apellidos");
            let color = prompt("Escriba azul para resaltar coincidencias");
            if (color === "azul") {
                alterStyle(integrantes[3]);
                alterStyle(integrantes[7]);
            }
        } else {
            console.log("No Existen coincidencias en los Apellidos");
        }
    }
}


    //Función para Capitalizar los Nombres
    function integranteN(definirNombre) {
        let str = definirNombre.charAt(0).toUpperCase();
        let str1 = definirNombre.slice(1).toLowerCase();
        let str2 = str + str1;
        return str2;
    }

    //Función para Uppercase los Apellidos
    function integranteA(definirApellido) {
        let str3 = definirApellido.toUpperCase();
        return str3;
    }