$('.service .card').each(function (i) {
    $('.service .card').eq(i).hide();
});
$('.service .btn-primary').hide();

$(window).scroll(function () {
    const wScroll = $(this).scrollTop();

    if ( wScroll > $('.service ').offset().top - 300) {
        $('.service .card').each(function (i) {
            $('.service .card').eq(i).show().addClass('animate__animated animate__fadeInUp');
        });
        $('.service .btn-primary').show().addClass('animate__animated animate__fadeInUp');
    };
});