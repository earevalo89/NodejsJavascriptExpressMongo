//-------------------- Process --------------------

// Información de proceso
var info = {
    pid: process.pid,
    version: process.version,
    platform: process.platform,
    title: process.title,
    argumentos: process.argv,
    execPath: process.execPath,
    carpeta: process.cwd()
};

console.log('entro en: ', info);

process.on('exit', function() {
    console.log('Antes de terminar, me despido.');
});

console.log('fin del proceso');

process.exit(0); // Esto termina la ejecución.

console.log('El proceso ya terminó, por lo tanto este código no se ejecuta.');