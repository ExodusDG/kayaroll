$(document).ready(function() {
    // SCROLL
    var $page = $('html, body');
    $('a[href*="#"]').click(function() {
        $page.animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 600);
        return false;
    });

    // DOTS 

    $(window).scroll(function() {
        var $sections = $('section');
        $sections.each(function(i, el) {
            var top = $(el).offset().top - 400;
            var bottom = top + $(el).height();
            var scroll = $(window).scrollTop();
            var id = $(el).attr('id');
            if (scroll > top && scroll < bottom) {
                $('.dot').removeClass('dots__active');
                $('a[href="#' + id + '"] > div').addClass('dots__active');
            }
        })
        if ($('a[href="#mission"] > div').hasClass('dots__active')) {
            $('.dot').addClass('dot-white');
        } else if ($('a[href="#info"] > div').hasClass('dots__active')) {
            $('.dot').addClass('dot-white');
        } else {
            $('.dot').removeClass('dot-white');
        }
    });

    // COUNTER UPDATE
    var count = 36; //Enter a variable that contains the current value of the counter
    var number1 = Math.floor((count / 10) % 10);
    var number2 = Math.floor((count / 1) % 10);
    $('.number1').html(number1);
    $('.number2').html(number2);


    //MOBILE NAVBAR
    var mobileMenu = $('.mobile__navbar__list');
    mobileMenu.hide();
    $('.hamburger').click(function() {
        $('.mobile__navbar').toggleClass('navbar__active');
        $(this).toggleClass('is-active');
        mobileMenu.toggle(300);
        mobileMenu.toggleClass('navbar__active_show');
    });
});