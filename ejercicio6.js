// Ejercicio6.js
// http://www.tutorialesprogramacionya.com/javascriptya/nodejsya/detalleconcepto.php?punto=4&codigo=4&inicio=0
var fs=require('fs');

console.log('Leyendo archivo1.txt ...');
fs.readFile('./archivo1.txt',function(error,datos){
    if (error) {
        console.log(error);
    }	
    else {
        console.log(datos.toString());
    }
});

console.log('última línea del programa');
