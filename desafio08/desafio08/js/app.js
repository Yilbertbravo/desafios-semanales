let estiloCSS = document.querySelector("#id-css");
let botonCambiarEstilos = document.querySelector("#id-cambioestilo");
let contador = 0;

function cambiarEstilos() {
    let estilos = ["css/futuro-estilos.css", "css/estilos-peliculas.css","css/estilos.css"];
    estiloCSS.setAttribute("href",estilos[contador]);
    if (contador == 2) {
        contador = 0;
    } else {
        contador++;
    }
}

botonCambiarEstilos.onclick = cambiarEstilos;
