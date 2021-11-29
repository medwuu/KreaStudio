$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        adaptiveHeight: false,
        spped: 1000,
        autoplay: true,
        responsive: [{
            breakpoint: 767,
            settings: {
                adaptiveHeight: true
            }
        }]
    });
});