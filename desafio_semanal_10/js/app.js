const previousValue = document.getElementById("previous__value");
const currentValue = document.getElementById("current__value");

const clear = document.getElementById('clear');
const clearAll = document.getElementById('clear-all');
const signos = document.getElementById('operadores');

const btnNumber = document.querySelectorAll(".number");

const btnMultipli = document.getElementById("multipli");
const btnAddition = document.getElementById("addition");
const btnSubtraction = document.getElementById("subtraction");
const btnDivision = document.getElementById("division");
const btnPercentage = document.getElementById("percentage");

const btnEqual = document.getElementById("equal");

const valor1 = "";
const valor2 = "";

function numerosPantalla(valor) {
    for (let i = 0; i < btnNumber.length; i++) {
        btnNumber[i].addEventListener('click', () => {
            if (btnNumber[i].textContent == "." && !valor.textContent.includes(".")) {
                valor.textContent = valor.textContent + ".";
            } else if (btnNumber[i].textContent == 1) {
                valor.textContent = valor.textContent + "1";
            } else if (btnNumber[i].textContent == 2) {
                valor.textContent = valor.textContent + "2";
            } else if (btnNumber[i].textContent == 3) {
                valor.textContent = valor.textContent + "3";
            } else if (btnNumber[i].textContent == 4) {
                valor.textContent = valor.textContent + "4";
            } else if (btnNumber[i].textContent == 5) {
                valor.textContent = valor.textContent + "5";
            } else if (btnNumber[i].textContent == 6) {
                valor.textContent = valor.textContent + "6";
            } else if (btnNumber[i].textContent == 7) {
                valor.textContent = valor.textContent + "7";
            } else if (btnNumber[i].textContent == 8) {
                valor.textContent = valor.textContent + "8";
            } else if (btnNumber[i].textContent == 9) {
                valor.textContent = valor.textContent + "9";
            } else if (btnNumber[i].textContent == 0) {
                valor.textContent = valor.textContent + "0";
            }

        });

    }


}
numerosPantalla(currentValue);


const borrar = clear.addEventListener('click', () => {
    currentValue.textContent = currentValue.textContent.slice(0, -1)
});

const reiniciar = clearAll.addEventListener('click', () => {
    currentValue.textContent = "";
    previousValue.textContent = "";
    signos.textContent = "";

});


function calcular(botonOperador, signo) {
    botonOperador.addEventListener('click', () => {
        signos.textContent = signo;
        botonOperador.classList.add('operator-push');
        const valor1 = currentValue.textContent;
        if (valor1 == "" && valor1 != Number) {
            currentValue.textContent = "Ingrese Número"
        } else {
            previousValue.textContent = parseFloat(valor1);
            currentValue.textContent = "";
        }
    });

}

btnEqual.addEventListener('click', (e) => {
    oper = signos.textContent;
    let valor1 = Number(previousValue.textContent);
    let valor2 = Number(currentValue.textContent);
    console.log("hola");
    if (valor2 == "" && valor2 != Number) {
        currentValue.textContent = "Ingrese Número"
    }
    switch (oper) {
        case "+":
            btnAddition.classList.remove('operator-push');
            currentValue.textContent = Number(valor1 + valor2);
            previousValue.textContent = "";
            break;

        case "-":
            btnSubtraction.classList.remove('operator-push');
            currentValue.textContent = Number(valor1 - valor2);
            previousValue.textContent = "";
            break;

        case "*":
            btnMultipli.classList.remove('operator-push');
            currentValue.textContent = Number(valor1 * valor2);
            previousValue.textContent = "";
            break;

        case "/":
            btnDivision.classList.remove('operator-push');
            if (valor2 == 0) {
                console.log("no se puede dividir por 0");
                break;
            }
            currentValue.textContent = Number(valor1 / valor2);
            previousValue.textContent = "";
            break;

        case "%":
            btnPercentage.classList.remove('operator-push');
            currentValue.textContent = Number(valor1 * (valor2 / 100));
            previousValue.textContent = "";
            break;
        default:
            break;
    }
});


calcular(btnAddition, "+");
calcular(btnMultipli, "*");
calcular(btnSubtraction, "-");
calcular(btnDivision, "/");
calcular(btnPercentage, "%");
