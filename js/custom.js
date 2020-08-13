jQuery.fn.visible = function() {
    return this.css('visibility', 'visible');
};

jQuery.fn.invisible = function() {
    return this.css('visibility', 'hidden');
};

jQuery.fn.visibilityToggle = function() {
    return this.css('visibility', function(i, visibility) {
        return (visibility == 'visible') ? 'hidden' : 'visible';
    });
};


// -- Hide Component and Element -- 
// hide section service
$('.service .card').each(function (i) {
    $('.service .card').eq(i).attr({"data-aos" : "fade-up", "data-aos-duration" : "500", "data-aos-delay" : "100"});
});
$('.service .btn-primary').attr({"data-aos" : "fade-in", "data-aos-duration" : "500", "data-aos-delay" : "300"});

// hide section 3
$('.section-3 #image-section-3').attr({"data-aos" : "fade-left", "data-aos-duration" : "500", "data-aos-delay" : "50"});
$('.section-3 #desc-section-3').attr({"data-aos" : "fade-right", "data-aos-duration" : "500", "data-aos-delay" : "50"});

// hide section 4
$('.section-4 #image-section-4').attr({"data-aos" : "fade-right", "data-aos-duration" : "500", "data-aos-delay" : "50"});
$('.section-4 #desc-section-4').attr({"data-aos" : "fade-left", "data-aos-duration" : "500", "data-aos-delay" : "50"});

// hide section 5
$('.section-5 #image-section-5').attr({"data-aos" : "fade-left", "data-aos-duration" : "500", "data-aos-delay" : "50"});
$('.section-5 #desc-section-5').attr({"data-aos" : "fade-right", "data-aos-duration" : "500", "data-aos-delay" : "50"});

// hide section 6
$('.section-6 .thumbnail-bubble').each(e => {
        $('.section-6 .thumbnail-bubble').eq(e).attr({"data-aos" : "zoom-in", "data-aos-duration" : "500", "data-aos-delay" : "100"})
    }
);
// -- end Hide Component and Element --