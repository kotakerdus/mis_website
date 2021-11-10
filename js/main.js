// Const variable to control Owl-carousel item shown when screen width is
// withing these values
const responsive = {
    0: { items: 1 },
    320: { items: 1 },
    560: { items: 2 },
    960: { items: 3 }
}

$(document).ready(function () {
    // Variable declaration
    $nav = $('.nav');
    $toggleCollapse = $('.nav-toggle');

    // Click event on toggle menu
    $toggleCollapse.click(function () {
        $nav.toggleClass('nav-expand');
        if ($nav.hasClass('nav-float') && $(window).scrollTop() < 20) {
            $nav.removeClass('nav-float');
        } else { $nav.addClass('nav-float'); }
    })

    // Toggle box-shadow on nav if user scrolled down
    $(window).scroll(function () {
        if ($(window).scrollTop() > 20) { $nav.addClass('nav-float') }
        else if (!($nav.hasClass('nav-expand'))) { $nav.removeClass('nav-float') }
    })

    // Hide collapse menu if it was toggled then screen is resized
    $(window).resize(function () {
        if ($(window).width() > 768) { $nav.removeClass('nav-expand') }
    })

    // Owl-carousel for blog
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: false,
        autoplayTimeout: 3000,
        dots: true,
        nav: true,
        slideTransition: 'ease-in-out',
        navText: [$('.owl-navigation .owl-nav-prev'), $('.owl-navigation .owl-nav-next')],
        responsive: responsive
    });

    // click to scroll up button at the footer
    $('.move-up span').click(function () {
        $('html, body').animate({ scrollTop: 0 }, 1000);
    })

    // AOS Instance
    AOS.init();
})
