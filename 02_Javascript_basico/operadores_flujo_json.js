// definimos un objeto de forma literal
var empleado = {
    nombre: "Neo Anderson",
    profesion: "Desarrollador",
    edad: 36,
    armas: ["granadas", "rocket", "machete", "kung fu"]
};

console.log(empleado);

var serializado = JSON.stringify(empleado); // Convierte el objeto JSON en texto

console.log(serializado);

// des-serializar el objeto 
var leido;

try {
    leido = JSON.parse(serializado);

    for (var i = 0; i < empleado.armas.length; i++) {
        var arma = empleado.armas[i];
        console.log(empleado.nombre + (arma == 'kung fu' ? ' sabe ' : ' tiene ') + arma);
    }

} catch (err) {
    console.log("No se pudo leer la varliable [serializado]");
}