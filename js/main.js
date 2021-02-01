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

    //VIDEO PLAY
    var video = $('.about__video')
    var button = $('.play__button')
    $('.play__button').click(function() {
            video.get(0).play();
            video.attr('controls', '')
            button.addClass('play__button_hide');
        })
        // BLOG SLIDER

    var blogPosts = $('.blog__posts');
    var counter = 0;

    function counterTick() {
        counter++
        if (counter == 4) {
            counter = 0;
        } else if (counter == 1) {
            blogPosts.css('transform', 'translateX(0%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_2').addClass('blog__dot_active')
        } else if (counter == 2) {
            blogPosts.css('transform', 'translateX(-129%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_3').addClass('blog__dot_active')
        } else if (counter == 3) {
            blogPosts.css('transform', 'translateX(-259%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_1').addClass('blog__dot_active')
        } else if (counter == 4) {
            counter = 1;
        }
    };

    function counterTick320() {
        counter++
        if (counter == 4) {
            counter = 0;
        } else if (counter == 1) {
            blogPosts.css('transform', 'translateX(0%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_2').addClass('blog__dot_active')
        } else if (counter == 2) {
            blogPosts.css('transform', 'translateX(-112%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_3').addClass('blog__dot_active')
        } else if (counter == 3) {
            blogPosts.css('transform', 'translateX(-225%)')
            $('.blog__dot').removeClass('blog__dot_active')
            $('.blog__dot_1').addClass('blog__dot_active')
        } else if (counter == 4) {
            counter = 1;
        }
    };

    var w = $(window).width();
    if (w < 600) {
        $('.revealator-slideright', '.revealator-slideleft', '.revealator-zoomin').removeClass('revealator-slideright', 'revealator-slideleft', 'revealator-zoomin')
    } else if (w == 415) {
        setInterval(counterTick, 2000);
    } else if (w < 321) {
        setInterval(counterTick320, 2000);
    } else if (w == 600) {
        counterTick()

    } else {
        return false;
    }

});