$(function(){
    
    

    var header = document.getElementById("header");
    var headroom = new Headroom(header);

    headroom.init();

    // menu responsivo
    //calculemos el ancho de la pantalla
    var ancho = $(window).width(),
    enlaces = $('#enlaces'),
    boton = $('#boton'),
    icono = $('#boton .icono');

    if (ancho < 700){
        enlaces.hide();
        icono.addClass('fa-bars');

    };

    icono.on('click', function(e){

        enlaces.slideToggle();
    });


 });