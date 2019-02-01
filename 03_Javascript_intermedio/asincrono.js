// "use strict";

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

escribeTras2Segundos("Hola papasander y que tales", function() {
    console.log("fin 1");
    escribeTras2Segundos("Hola papasander y que tales a lo bien nan", function() {
        console.log("fin 2");
    });

});