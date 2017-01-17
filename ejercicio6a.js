// Ejercicio6a.js
// http://www.tutorialesprogramacionya.com/javascriptya/nodejsya/detalleconcepto.php?punto=4&codigo=4&inicio=0
var fs=require('fs');       // modulo de escritura y lectura (file system)

console.log('Leyendo archivo1.txt ...');
function leer(error,datos){
    if (error) {
        console.log(error);
    }	
    else {
        console.log(datos.toString());
    }
}

fs.readFile('./archivo1.txt',leer);

console.log('última línea del programa');
