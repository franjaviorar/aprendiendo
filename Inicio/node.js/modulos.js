const os = require('os');

/*


// analizar la memoria RAM libre, esta es dada en bytes
var memoria = os.freemem;
var memorialibre = ((memoria/1024)/1024)/1024;

console.log('Memoria libre', memorialibre);
console.log('Memoria total', os.totalmem());

//version de plataforma 

console.log ('version de la plataforma', os.release());

//Sistema de archivos


*/




const fs = require('fs');

/*


fs.writeFile('./texto.txt', 'este es el contenido de este TXT', function(err){
    if (err){
        console.log('Ocurrio un error amigo mio', err);
    }
    console.log ('archivo creado (;')
});

//Node.js actua de manera asincrona------------
console.log('ultimalinea de codigo')

query('Select * FROM User',function(err, user){
    if(err){
        console.log(err)
    }

    if(user){

        //sentencias aleatorias
    }
});



// lectura de archivos

fs.readFile('./texto.txt', function(err, data){

    if(err){
        console.log('Ocurrio un error');
    }

    console.log(data);
    console.log(data.toString());

})

*/


const http = require('http');


http.createServer(function(req, res){

    res.writeHead(200, {'Content-type': 'text/html' });
    res.write('<h1> Titulo Principal alv</h1>');
    res.end();

}).listen(3000);