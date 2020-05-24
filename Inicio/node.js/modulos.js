const os = require('os');

var memoria = os.freemem;
var memoriatotal = ((memoria/1024)/1024)/1024;

console.log(memoriatotal);