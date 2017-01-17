// Ejercicio5.js
// http://www.tutorialesprogramacionya.com/javascriptya/nodejsya/detalleconcepto.php?punto=4&codigo=4&inicio=0
// 
var fs=require('fs');       // modulo de escritura y lectura (file system)

fs.writeFile('./archivo1.txt','línea 1\nLínea 2',function(error){
    if (error)
        console.log(error);
    else
        console.log('El archivo fue creado');
});

console.log('última línea del programa');