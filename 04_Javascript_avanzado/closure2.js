// "use strict";

function creaAgente(nombre) {
    var edad = 0;

    return {
        ponNombre: function(nuevoNombre) {
            nombre = nuevoNombre;
        },
        leeNombre: function() {
            return nombre;
        },
        ponEdad: function(nuevaEdad) {
            edad = nuevaEdad;
        },
        leeEdad: function() {
            return edad;
        },
        escribe: function() {
            console.log('Soy ' + nombre + ' y tengo ' + edad + ' años.');
        }
    }
}

// Creamos un agente
var smith = creaAgente('Smith');
smith.ponEdad(33);

var jones = creaAgente('Jones');
jones.ponEdad(42);

console.log('Agente: ' + smith.leeNombre() + ', Edad: ' + smith.leeEdad());
console.log('Agente: ' + jones.leeNombre() + ', Edad: ' + jones.leeEdad());

// Al ser un Closure, no pierde la referencia y no tiene que utilizar bind() como con this ya que puede acceder directamente a sus propiedades.
setTimeout(smith.escribe, 1000);
setTimeout(jones.escribe, 1000);
setTimeout(smith.escribe, 1000);