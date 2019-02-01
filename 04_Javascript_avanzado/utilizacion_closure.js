// "use strict";

function creaClosure(valor) {
    return function() {
        return valor;
    }
}

var closure1 = creaClosure(1);

console.log('Valor closure: ' + closure1());

function creaSumador(valor1) {
    return function(valor2) {
        return valor1 + valor2;
    }
}

var suma = creaSumador(5);

console.log(suma(10));
console.log(suma(20));