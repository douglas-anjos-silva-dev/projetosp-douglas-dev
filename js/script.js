$(document) .ready(function(){
    //Modal Menu Nevagação
    $('.bars_active').click(function(){
        $('.menu_link').toggle(400);
       
    });


    //MODAL para abrir seção das redes sociais

    $('.active') .click(function(){
        $('.navigator').toggle(100);
       
    });


    //Deslizar ao clicar na âncora do menu até a seção
    $('.menu_link a').click(function (e){
        e.preventDefault();

        var link = $(this).attr('href');
        var targetOffSet = $(link).offset().top();
        var menuHeight = $('.menu_link').innerHeight();

        console.log(link);
    });
});