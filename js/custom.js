// -- Hide Component and Element -- 
// hide section service
$('.service .card').each(function (i) {
    $('.service .card').eq(i).hide();
});
$('.service .btn-primary').hide();

// hide section 3
$('.section-3 #image-section-3').hide();
$('.section-3 #desc-section-3').hide();
// -- end Hide Component and Element --

// scroll animate
$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    // scroll animate section service
    if ( wScroll > $('.service ').offset().top - 300) {
        $('.service .card').each(function (i) {
            $('.service .card').eq(i).show().addClass('animate__animated animate__fadeInUp');
        });
        $('.service .btn-primary').show().addClass('animate__animated animate__fadeInUp');
    };

    // scroll animatee section 3
    if ( wScroll > $('.section-3 ').offset().top - 700) {
        $('.section-3 #image-section-3').show().addClass('animate__animated animate__fadeInRight');
        $('.section-3 #desc-section-3').show().addClass('animate__animated animate__fadeInLeft');
    };
});