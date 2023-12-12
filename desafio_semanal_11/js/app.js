const listComida = document.getElementById("list_products");
const priceTotal = document.getElementById("price__total");
const btnpriceTotal = document.getElementById("total__price__add");
const divForm = document.getElementById("div__form");

const newArepa1 = document.getElementById("buy__arepa1");
const newArepa2 = document.getElementById("buy__arepa2");
const newArepa3 = document.getElementById("buy__arepa3");
const newBurguer1 = document.getElementById("buy__burguer1");
const newBurguer2 = document.getElementById("buy__burguer2");
const newBurguer3 = document.getElementById("buy__burguer3");
const newPepito1 = document.getElementById("buy__pepito1");
const newPepito2 = document.getElementById("buy__pepito2");
const newPepito3 = document.getElementById("buy__pepito3");

const btnAdd1 = document.getElementById("add_arepa1");
const btnAdd2 = document.getElementById("add_arepa2");
const btnAdd3 = document.getElementById("add_arepa3");
const btnAdd4 = document.getElementById("add_burguer1");
const btnAdd5 = document.getElementById("add_burguer2");
const btnAdd6 = document.getElementById("add_burguer3");
const btnAdd7 = document.getElementById("add_pepito1");
const btnAdd8 = document.getElementById("add_pepito2");
const btnAdd9 = document.getElementById("add_pepito3");

const priceAdd1 = document.getElementById("price__arepa1");
const priceAdd2 = document.getElementById("price__arepa2");
const priceAdd3 = document.getElementById("price__arepa3");
const priceAdd4 = document.getElementById("price__burguer1");
const priceAdd5 = document.getElementById("price__burguer2");
const priceAdd6 = document.getElementById("price__burguer3");
const priceAdd7 = document.getElementById("price__pepito1");
const priceAdd8 = document.getElementById("price__pepito2");
const priceAdd9 = document.getElementById("price__pepito3");

const newProducts = [newArepa1, newArepa2, newArepa3, newBurguer1, newBurguer2, newBurguer3, newPepito1, newPepito2, newPepito3]
const productos = [];

const priceProducts = [priceAdd1, priceAdd2, priceAdd3, priceAdd4, priceAdd5, priceAdd6, priceAdd7, priceAdd8, priceAdd9]
const arrPrecios = []

const botones = [btnAdd1, btnAdd2, btnAdd3, btnAdd4, btnAdd5, btnAdd6, btnAdd7, btnAdd8, btnAdd9,]

for (let i = 0; i < botones.length; i++) {
    botones[i].addEventListener('click', () => {
        productos.push(newProducts[i].innerText);
        arrPrecios.push(Number(priceProducts[i].innerText));
        loadElements();
        loadBtnPrice();
    });
}

function loadElements() {
    list_products.innerHTML = "";
    priceTotal.innerHTML = "0";

    productos.forEach((text, index) => {
        // Crea un elemento HTML li
        const li = document.createElement("li");
        li.style.fontSize = "1.8em";
        li.style.wordSpacing = "0.2em";

        li.innerText = text;

        // Crea un elemento HTML span
        const span = document.createElement("span");

        if (li.innerText == "Arepa de Carne") {
            span.innerText = " 3500";
        } else if (li.innerText == "Arepa de Pollo") {
            span.innerText = " 3900";
        } else if (li.innerText == "Arepa de Cerdo") {
            span.innerText = " 3200";
        } else if (li.innerText == "Hamburguesa Especial") {
            span.innerText = " 3900";
        } else if (li.innerText == "Hamburguesa Doble") {
            span.innerText = " 4500";
        } else if (li.innerText == "Hamburguesa Triple") {
            span.innerText = " 4900";
        } else if (li.innerText == "Pepito de Carne") {
            span.innerText = " 3850";
        } else if (li.innerText == "Pepito Doble") {
            span.innerText = " 4600";
        } else if (li.innerText == "Pepito especial") {
            span.innerText = " 5100";
        };
        span.style.fontWeight = "bold";
        let sumatoria = arrPrecios.reduce((acumulador, valor) => acumulador + valor);
        priceTotal.innerText = sumatoria;

        // Crea un elemento HTML button
        const button = document.createElement("button");
        button.innerText = "Quitar";
        button.style.margin = "2px 5px";
        button.style.backgroundColor = "rgb(243, 137, 137)";
        button.style.borderRadius = "0.5em";
        button.style.padding = "0.2em";
        button.id = index;
        button.onclick = removeLi;

        // Añade los elementos a la lista HTML
        li.appendChild(span);
        li.appendChild(button);
        listComida.appendChild(li);
    });
}

loadElements();

// Función que elimina un elemento en específico de la lista HTML.
function removeLi(e) {
    let index = e.target.id;
    arrPrecios.splice(index, 1);
    productos.splice(index, 1);
    loadElements();
}


function loadBtnPrice() {
    if (arrPrecios.length > 0) {
        console.log("agregar boton");
        btnpriceTotal.removeAttribute("hidden");
    };
}

const addForm = btnpriceTotal.addEventListener('click', () => {
    divForm.removeAttribute("hidden");
    labelName.setAttribute("focus");
});





//********Validaciones Contacto*********** */
const nameContact = document.getElementById("name");
const directionContact = document.getElementById("direction");
const descriptionOrder = document.getElementById("order__details");
const numberPhone = document.getElementById("number");
const emailContact = document.getElementById("email");
const btnComprar = document.getElementById("btn__comprar");

const regexNameContact = /^[a-zA-Z\s]{3,}$/;
const regexNumber = /^[0-9]{10,}$/;
const regexEmailContact = /^[a-z0-9._]+@[a-z0-9-]+.(com$|com.[a-z0-9]{2}$)/;
const regexDescriptionContact = /[a-zA-Z\s]{10}$/;

const form = document.getElementById('formulario');
const inputs = document.querySelectorAll('#formulario input')

const validarFormulario = () => {
    validateName();
    validateNumber();
    validateDirection();
    validateEmailContact();
    validateDetails();
    btnBuyActive()
}

inputs.forEach((input) => {
    input.addEventListener('keyup', validarFormulario);
    input.addEventListener('blur', validarFormulario);
})

// form.addEventListener('submit', (e) => {
//     e.preventDefault();
// });




function validateName() {
    if (!regexNameContact.test(nameContact.value)) {
        nameContact.nextElementSibling.innerText = "El nombre es invalido";
    } else {
        nameContact.nextElementSibling.innerText = " ";
    }
}

function validateNumber() {
    if (!regexNumber.test(numberPhone.value)) {
        numberPhone.nextElementSibling.innerText = "El número es invalido";
    } else {
        numberPhone.nextElementSibling.innerText = " ";
    }
}

function validateDirection() {
    if (!regexNameContact.test(directionContact.value)) {
        directionContact.nextElementSibling.innerText = "Ingrese una dirección valida";
    } else {
        directionContact.nextElementSibling.innerText = " ";
    }
}

function validateEmailContact() {
    if (!regexEmailContact.test(emailContact.value)) {
        emailContact.nextElementSibling.innerText = "El email ingresado es invalido";
    } else {
        emailContact.nextElementSibling.innerText = " ";
    }
}

function validateDetails() {
    if (!regexDescriptionContact.test(descriptionOrder.value)) {
        descriptionOrder.nextElementSibling.innerText = "Ingrese una descripción";
    } else {
        descriptionOrder.nextElementSibling.innerText = " ";
    }
}

function btnBuyActive() {
    if (nameContact.nextElementSibling.innerText == "" &&
        numberPhone.nextElementSibling.innerText == "" &&
        directionContact.nextElementSibling.innerText == "" &&
        emailContact.nextElementSibling.innerText == "" &&
        descriptionOrder.nextElementSibling.innerText == "") {
        btnComprar.removeAttribute('hidden');
    }
}

btnComprar.addEventListener('click', (e) => {

    let alertConfirm = `Hola ${nameContact.value}.
        Esta es tu dirección: ${directionContact.value}.
        Este es tu número de telefono: ${numberPhone.value}.
        Este es tu email de contacto: ${emailContact.value}.

        Tu número de pedido es el numero: ${e.detail}`;

    window.confirm(alertConfirm);

});
