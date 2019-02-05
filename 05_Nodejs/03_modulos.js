// Los Nodos están basados en el estandar CommonJS
// * Quien quiere usar un módulo lo carga con la instrucción: require
// * La instrucción require es: síncrona.
// * Son módulos son singletons, es decir se cargan una sola vez y después reutilizamos el contenido
// * Opcionalmente, los módulos usan exports para exportar cosas.

// Node.js busca los módulos en la ruta donde se le indique que está a partir de la ruta actual del archivo. './' ó '../'
// Si es una ruta como la marcada anteriormente buscará el módulo en el core. (Por ejemplo fs (FileSystemr))
// Si el módulo no es del core de Node.js, buscará en la carpeta node_modules local
// Si tampoco se encuentra en la carpeta local buscará el módulo en la carptea node_modules global.