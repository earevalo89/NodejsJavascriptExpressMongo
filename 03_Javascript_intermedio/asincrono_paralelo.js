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

// bucle asíncrono en paralelo
var acabados = 0;

for (var i = 0; i < 5; i++) {
    escribeTras2Segundos('Texto ' + i, function() {
        acabados++;
        if (acabados >= 5) {
            console.log("Fin");
        }

    });
}