const operaciones = {}

function sumar( x,y){
    return x+y;
}

function restar(x,y){

    return x/y;
}

function multiplicar(x,y){

    return x*y;
}

function dividir(x,y){

    if(y == 0){

        console.log('No mames vato, no se puede ):')
    }else{
        return x/y;
    }
}

operaciones.sumar = sumar;
operaciones.restar = restar;
operaciones.multiplicar = multiplicar;
operaciones.dividir = dividir;


function haywey(nombre){
    console,log('hola', nombre);
}

module.exports = haywey;

/* exports.dividir = dividir;
exports.restar = restar;
exports.multiplicar = multiplicar;
exports.sumar = sumar;*/