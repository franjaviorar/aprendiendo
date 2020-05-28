const http = require('http');
const express = require('express');

const arrancar = express();

arrancar.get('/', (req, res) => {

    res.end('¿Que anda pasando?');
});

arrancar.listen(3000, () =>{

    console.log('servidor funcionando correctamente');
});