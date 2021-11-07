// Const variable to control Owl-carousel item shown when screen width is
// withing these values
const responsive = {
    0:   {items: 1},
    320: {items: 1},
    560: {items: 2},
    960: {items: 3}
}

$(document).ready(function() {
    // Variable declaration
    $nav = $('.nav');
    $toggleCollapse = $('.toggle-collapse');

    // Click event on toggle menu
    $toggleCollapse.click(function() {
        $nav.toggleClass('collapse');
    })

    // Hide collapse menu if it was toggled then screen is resized
    $(window).resize(function() {
        if($(window).width() >= 850) {
            $nav.removeClass('collapse');
        }
    })

    // Owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: false,
        nav: true,
        navText: [$('.owl-navigation .owl-nav-prev'),$('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll up button at the footer
    $('.move-up span').click(function() {
        $('html, body').animate({scrollTop: 0}, 1000);
    })

    // AOS Instance
    AOS.init();
})
