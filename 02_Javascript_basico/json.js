//textoJSON, es una variable tipo string que se termina conviertiendo en un objeto 
//mediante la conversión JSON.parse y se asigna a la variable objeto.
var textoJSON = '{"nombre": "Thomas Anderson", "profesion": "Developer"}';

var objeto = JSON.parse(textoJSON);
console.log(objeto);
// produce un objeto