function Persona(name) {
    this.name = name;
}

var persona = new Persona("Neo");

Persona.prototype.saluda = function() {
    console.log("Hola me llamo " + this.name);
};

console.log(persona.name);
persona.saluda();