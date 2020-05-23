jQuery('document').ready(function($){

    var menuBtn = $('.menu-icono'),
    menu = $('.navegacion ul'),
    /*medir pantalla*/
    ventana = $(window).width();
     

    if (window = 780){
        menu.removeClass('show')
    }

    menuBtn.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        } else{
            menu.addClass('show');
        }
    });
});