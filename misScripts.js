function mostrarResultados(resultado) {
    document.getElementById("resultado").value = resultado;
}

function suma() {
    let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    mostrarResultados(Num1 + Num2);

}

function resta(){
    let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    mostrarResultados(Num1 - Num2);
}

function multiplicacion(){
    let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    mostrarResultados(Num1 * Num2);
}

function division(){
    let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    mostrarResultados(Num1 / Num2);
}

function potencia() {
    let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    mostrarResultados(Math.pow(Num1, Num2));
}
function raizCuadrada() {
    let Num = +document.getElementById("num1").value;
    mostrarResultados(Math.sqrt(Num));
}
function valorAbs() {
    let Num = +document.getElementById("num1").value;
    mostrarResultados(Math.abs(Num));
}

function random(){
    /*let Num1 = +document.getElementById("num1").value;
    let Num2 = +document.getElementById("num2").value;
    Num1 = Num1 + 1;
    Num2 = Num2 + 1;*/
    let minimo = +document.getElementById("num1").value;
    let maximo = +document.getElementById("num2").value;
    maximo = maximo + 1;
    mostrarResultados(Math.floor(Math.random() * (maximo - minimo) + minimo));
}

function round() {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultados(Math.round(resultado));
}

function floor(floor) {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultados(Math.floor(resultado));
}
function ceil(ceil) {
    let resultado = +document.getElementById("resultado").value;
    mostrarResultados(Math.ceil(resultado));
}

function borrar(){
    let Num1 = document.getElementById("num1");
    let Num2 = document.getElementById("num2");
     Num1.value = "";
     Num2.value = "";
}
