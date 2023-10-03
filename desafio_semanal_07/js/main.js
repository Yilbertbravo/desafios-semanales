let titulo = document.querySelector("title");
console.log(titulo.innerHTML);

// Variables Integrante Numero 1
let primerNombre1 = document.querySelector(".primerN1");
primerNombre1 = primerNombre1.innerHTML;

let segundoNombre1 = document.querySelector(".segundoN1");
segundoNombre1 = segundoNombre1.innerHTML

let primerApellido1 = document.querySelector(".primerA1");
primerApellido1 = primerApellido1.innerHTML;

let segundoApellido1 = document.querySelector(".segundoA1");
segundoApellido1 = segundoApellido1.innerHTML;

//array integrante 1
let integrante1 = [primerNombre1, segundoNombre1, primerApellido1, segundoApellido1];


//Variables Integrante Numero 2
let primerNombre2 = document.querySelector(".primerN2");
primerNombre2 = primerNombre2.innerHTML;

let segundoNombre2 = document.querySelector(".segundoN2");
segundoNombre2 = segundoNombre2.innerHTML;

let primerApellido2 = document.querySelector(".primerA2");
primerApellido2 = primerApellido2.innerHTML;

let segundoApellido2 = document.querySelector(".segundoA2");
segundoApellido2 = segundoApellido2.innerHTML;

//array integrante 2
let integrante2 = [primerNombre2, segundoNombre2, primerApellido2, segundoApellido2];

//for Primer Integrante
for (let i = 0; i < integrante1.length; i++) {
    if (integrante1[0] !== "" && integrante1[1] !== "" && integrante1[2] !== "" && integrante1[3] !== "") {
        console.log("Integrante 1: " + integrante(integrante1[0]) + " " + integrante(integrante1[1]) + " " + integrante(integrante1[2]) + " " + integrante(integrante1[3]));
    }

    else if (integrante1[0] !== "" && integrante1[1] === "" && integrante1[2] !== "" && integrante1[3] !== "") {
        console.log("Integrante 1: " + integrante(integrante1[0]) + " " + integrante(integrante1[2]) + " " + integrante(integrante1[3]));
    }

    else if (integrante1[0] != "" && integrante1[1] === "" && integrante1[2] != "" && integrante1[3] === "") {
        console.log("Integrante 1: " + integrante(integrante1[0]) + " " + integrante(integrante1[2]));
    }

}

//for Segundo Integrante
for (let i = 0; i < integrante2.length; i++) {
    if (integrante2[0] !== "" && integrante2[1] !== "" && integrante2[2] !== "" && integrante2[3] !== "") {
        console.log("Integrante 2: " + integrante(integrante2[0]) + " " + integrante(integrante2[1]) + " " + integrante(integrante2[2]) + " " + integrante(integrante2[3]));
    }

    else if (integrante2[0] !== "" && integrante2[1] === "" && integrante2[2] !== "" && integrante2[3] !== "") {
        console.log("Integrante 2: " + integrante(integrante2[0]) + " " + integrante(integrante2[2]) + " " + integrante(integrante2[3]));
    }

    else if (integrante2[0] != "" && integrante2[1] === "" && integrante2[2] != "" && integrante2[3] === "") {
        console.log("Integrante 2: " + integrante(integrante2[0]) + " " + integrante(integrante2[3]));
    }

}

//Funcion Cambio de color de fondo de Nombres
function alterStyle(elem) {
    elem.style.background = "#af2439";
}



//Comparacion de igualdad en los nombres
let n1 = document.querySelector(".primerN1");
let n2 = document.querySelector(".segundoN1");
let na = document.querySelector(".primerN2");
let nb = document.querySelector(".segundoN2");
for (let i = 0; i < 1; i++) {

    if (integrante1[0] === integrante2[0]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(n1);
            alterStyle(na);
        }

    } else if (integrante1[1] === integrante2[0]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(n2);
            alterStyle(na);
        }
    } else if (integrante1[0] === integrante2[1]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(nb);
            alterStyle(n1);
        }

    } else if (integrante1[1] === integrante2[1]) {
        console.log("Existen coincidencias en los nombres");
        let color = prompt("Escriba rojo para resaltar coincidencias");
        if (color === "rojo") {
            alterStyle(nb);
            alterStyle(n2);
        }
    }

    else {
        console.log("No Existen coincidencias en los nombres");

    }
}


//Función para Capitalizar los Nombres
function integrante(definirIntegrante) {
    let str = definirIntegrante.charAt(0).toUpperCase();
    let str1 = definirIntegrante.slice(1).toLowerCase();
    let str2 = str + str1;
    return str2;
}
