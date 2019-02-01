var fs = require('fs');
var path = require('path');

var versionModulo = function(moduleName, callBack) {

    var fichero = path.join('./node_modules', moduleName, 'package.json');

    fs.readFile(fichero, 'utf8', function(err, data) {
        if (err) {
            callBack(err);
            return;
        } else {

            var objJSON;

            try {
                objJSON = JSON.parse(data);

                if (objJSON && !objJSON.version) {
                    callBack('No se encuentra la etiqueta [version] en ' + fichero);
                } else {
                    console.log(err, 'Versión del objeto [' + modulo + '] es: ' + objJSON.version);
                }
            } catch (e) {
                callBack('Error al convertir el archivo [' + fichero + ']. Error: ' + e);
            }
        }
    });

};

// Uso de la función
var modulo = 'chance';

versionModulo(modulo, function(err, version) {
    if (err) {
        console.log("Se presentó un error durante el proceso: " + err);
        return;
    }

    console.log('La versión del módulo ' + modulo + ' es: ' + version);
});