// Permite retornar de forma asincrona resultados enviando una función como expresión, 
// utilizando un argumento más, una expresión de tipo función (callback) para que se invoque cuando termine.
// Ejemplo: bucle con funciones asincronas.

var lista = [1, 2, 3, 4, 5, 'Papasander'];

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// Bucle asíncrono en serie
// Llamar a una función con un Array en serie
// al finalizar llamar a la función callback de finalización.

function serie(lista, func, callbackFin) {
    if (lista.length == 0) {
        callbackFin();
        return;
    }

    // Array.shift(), quita el primer elemento de un array y lo devuelve.
    func(lista.shift(), function() {
        serie(lista, func, callbackFin);
    })
}

serie(lista, escribeTras2Segundos, function() {
    console.log('He terminado');
});