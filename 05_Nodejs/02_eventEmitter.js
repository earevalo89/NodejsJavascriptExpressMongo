// Event Emmiter, con Event Emmiter podemos colgar eventos de un identificador
// Para emitir un evento de un determinado

var events = require('events');
var myEmmiter = new events.EventEmitter();

myEmmiter.on('llamar telefono', sonartelefono);
myEmmiter.on('llamar telefono', vibrarTelefono);

function sonartelefono(quien) {
    if (quien === 'madre') {
        return;
    }
    console.log("Ring, Ring, Ring");
}

function vibrarTelefono() {
    console.log("Brr Brr Brr");
}

myEmmiter.emit('llamar telefono');
console.log("..........................");
myEmmiter.emit('llamar telefono', 'madre');