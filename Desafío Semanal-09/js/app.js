let button = document.querySelector("div");
let getcharhtml = document.querySelector('#char');
let idNames = ["#mario", "#luigi", "#bowser", "#peach", "#yoshi", "#toadette", "#daisy", "#toad"]


function check() {
    let char = prompt("¿Quién se presenta hoy? (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)");
    let charmin = char.toLowerCase();
    let getcharid = document.getElementById(charmin);

    if (charmin == "mario") {
        ocultarImg();
        getcharhtml.innerHTML = ("Mario");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "luigi") {
        ocultarImg();
        getcharhtml.innerHTML = ("Luigi");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "bowser") {
        ocultarImg();
        getcharhtml.innerHTML = ("Bowser Morton Koopa");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "peach") {
        ocultarImg();
        getcharhtml.innerHTML = ("Princesa Peach Toadstool");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "yoshi") {
        ocultarImg();
        getcharhtml.innerHTML = ("T. Yoshisaur Munchakoopas");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "toad") {
        ocultarImg();
        getcharhtml.innerHTML = ("Toad");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "toadette") {
        ocultarImg();
        getcharhtml.innerHTML = ("Toadette");
        getcharid.setAttribute('title', 'Presentado');
    }
    else if (charmin == "daisy") {
        ocultarImg();
        getcharhtml.innerHTML = ("Princesa Daisy");
        getcharid.setAttribute('title', 'Presentado');
    }
    else {
        getcharhtml.innerHTML = ("(Desconocido)");
        alert("Ingrese un valor conocido: (Mario, Luigi, Bowser, Peach, Yoshi, Toad, Toadette, Daisy)")
    }
    // button.setAttribute('style', 'display:none');

}

button.onclick = check;

// ***********************
function ocultarImg() {
    let apagado = document.querySelector(idNames[0]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[1]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[2]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[3]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[4]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[5]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[6]);
    apagado.setAttribute('title', 'noPresentado');

    apagado = document.querySelector(idNames[7]);
    apagado.setAttribute('title', 'noPresentado');

}

// *****************************


