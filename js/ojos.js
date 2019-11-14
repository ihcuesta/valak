function toggleNavigation() {
    $('.monja').toggleClass('difusa');
    $('.cruz').toggleClass('giro');
    $('.linea-vertical').toggleClass('equis negro');
    $('.linea-horizontal').toggleClass('negro');
    $('.info').fadeToggle(function () {
        $('.texto').fadeToggle();

    });

}

function pagina() {

    $(".contenedor2").fadeIn(2000, function () {
        $(".contenedor1").fadeIn(1000, function () {
            $(".text1").fadeIn(2000, function () {
                $(".text2").fadeIn(2000, function () {
                    $(".text2, .text1").fadeOut(2000, function () {
                        $('.contenedor1').animate({
                            opacity: 0,
                        }, {
                            duration: 500,
                            complete: setTimeout(function () {
                                $('.monja').fadeIn(500, function () {
                                    $('.monja').css("transition", "all 1000ms ease-in-out");
                                });

                                $('.cruz').fadeIn(500);
                            }, 1000)
                        });


                    });
                });

            });

        });
    });



};




$(document).ready(function () {
    
    if ($(window).width() < 900) {
        $(".info").css("display", "block");
        $(".texto").css("display", "block");
        $(".cruz2").css("display", "block");
        $(".texto h1").text("Mejor en pantalla grande");
        $(".texto p").text("Te podría enseñar una versión adaptada a dispositivos móviles, pero creo que esta web es realmente atractiva en versión escritorio. Entra desde tu PC o Mac, si te atreves...");
        
    } else {
        pagina();
    }
    

    $('.cruz').click(toggleNavigation);
});


$(document).on('mousemove', mouseParallax);

let transfer;
let transfer2;

function mouseParallax(e) {

    $('.ojos').each(function () {

        transfer = $(this).data('transferencia');

        $(this).css('transform', 'translate(' + e.pageX * transfer + 'px, ' + e.pageY * transfer + 'px)');

    });

    $('.contenedor2, .contenedor1').each(function () {

        transfer2 = $(this).data('transferencia');

        $(this).css('transform', 'translate(' + e.pageX * transfer2 + 'px, ' + e.pageY * transfer2 + 'px)');

    });
}
//        });
