jQuery('document').ready(function($){

    var menuBtn = $('.menu-icono'),
    menu = $('.navegacion ul');

    menuBtn.click(function(){

        if(menu.hasClass('show')){
            menu.removeClass('show');
        } else{
            menu.addClass('show');
        }
    });
});