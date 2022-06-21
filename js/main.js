$(document).ready(function () {
    //Cambio de header
    $(window).on('scroll', function () {
        let position = $('#pr').offset();
        if ($(window).scrollTop() >= position.top) {
            $('header').removeClass('transparent');
        }
        else {
            $('header').addClass('transparent');
        }
    })

    //Accionamiento del menu lateral
    $('#burger').click(function () {
        $('#burger').toggleClass('abierto');
        $('.menu').toggleClass('abierto');
    })

    //Smooth Scroll
    $('a').on('click', function () {
        if (this.hash !== '') {
            let hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800)
        }
    })
})