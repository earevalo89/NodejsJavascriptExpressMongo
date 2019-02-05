// Copiar las propiedades propias de un objeto sobre otro
// Object.assign(objetoDestino, objetoFuente);

function Persona(name) {
    this.name = name;
}

var persona = new Persona("Neo");

Persona.prototype.saluda = function() {
    console.log("Hola me llamo " + this.name);
};

// Heredando de persona
function Agente(nameAgente) {
    Persona.call(this, nameAgente);
    // Ejecuta el constructor de Persona con el this de Agente
    // definiendo en el this de Agente una propiedad name 
    // y asignandole el parámetro recibido
}

// le asignamos como prototipo una Persona
Agente.prototype = new Persona('soy un prototipo');

var agente = new Agente('Papasander');

agente.saluda();

console.log(
    Object.getPrototypeOf(agente),
    agente instanceof Agente,
    agente instanceof Persona,
    agente instanceof Object
);

// -------------- Herencia múltiple ------------

function Superheroe() {
    this.vuela = function() {
        console.log(this.name + ' vuela');
    };
    this.esquivaBalas = function() {
        console.log(this.name + ' esquiva balas');
    };
}

Object.assign(Agente.prototype, new Superheroe());

agente.vuela();
agente.esquivaBalas();