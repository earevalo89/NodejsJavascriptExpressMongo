var casa = {
    ventanas: 7,
    cuantasVentanas: function() {
        console.log('La casa tiene ' + this.ventanas + ' ventanas');
    }
}

var carro = {
    ruedas: 4,
    cuantasRuedas: function() {
        console.log('El carro tiene ' + this.ruedas + ' ruedas');
    }
}

// Accede correctamente al objeto this
casa.cuantasVentanas();
carro.cuantasRuedas();

// No accede al objeto this
setTimeout(casa.cuantasVentanas, 1000);
setTimeout(carro.cuantasRuedas, 1000);

// Para corregir y poder acceder a las propiedades del objeto se realiza el llamado de la siguiente forma.
setTimeout(casa.cuantasVentanas.bind(casa), 1000);
setTimeout(carro.cuantasRuedas.bind(carro), 1000);