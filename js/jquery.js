$(document).ready(function() {
    // mega-menu
    $(".nav-pills a").mouseover(function() {
        $('#v-pills-tab a[href="' + $(this).attr('href') + '"]').tab('show')
    })

    // stiky header 


    $(window).scroll(function() {
        var sticky = $('.sticky-top'),
            scroll = $(window).scrollTop();

        if (scroll >= 100) {
            sticky.addClass('scroll');
            $('#show-scroll').removeClass('d-none');
        } else if (scroll <= 58) {
            sticky.removeClass('scroll');
            $('#show-scroll').addClass('d-none');
        }
    });

    $('#carouselExampleIndicators').on('slide.bs.carousel', function() {
        $('.carousel').carousel({
            interval: 2000
        })
    })

})

$(window).on('resize', function() {
    activate();
});

function activate() {
    var win = $(window).width();


    if (win <= 578) {
        $('.cantidad').hide();
        $('.bg-white.bx-shadow').removeClass('sticky-top');
    } else {
        $('.cantidad').show();
        $('.bg-white.bx-shadow').addClass('sticky-top');
    }
}
activate();

$('.productos .carousel').carousel({
    interval: false
})