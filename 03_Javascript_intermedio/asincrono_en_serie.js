// Permite retornar de forma asincrona resultados enviando una función como expresión, 
// utilizando un argumento más, una expresión de tipo función (callback) para que se invoque cuando termine.
// Ejemplo: bucle con funciones asincronas.

console.log('Empiezo');

function escribeTras2Segundos(texto, callback) {
    setTimeout(function() {
        console.log(texto);
        callback();
    }, 2000);
}

// Bucle asíncrono en serie
// Llamar a una función N veces en serie
// al finalizar llamar a la función callback de finalización.

function serie(n, func, callbackFin) {
    if (n < 0) {
        callbackFin();
        return;
    }
    func(n, function() {
        serie(n, func, callbackFin);
    })
    n--;
}

serie(5, escribeTras2Segundos, function() {
    console.log('He terminado');
});