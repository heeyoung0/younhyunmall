$(function() {
    $('.header-popup a span').on('click', function() {
        $('.header-popup').slideUp(200)
    });
    let menuIcon = $('.left-menu');
    let sideMenu = $('.side-menu');
    let bg = $('.bg_gnb');
    let close = $('.login-info a')
    let body = $('body')
    let contents = $('.contents');
    let headerLogo = $('.header-logo-nav')
    let hideMenu = $('.hide-menu > li > a')
    let rotate = $('.depth1 a')

    $("a").click(function(e){
        e.preventDefault();
    });

    menuIcon.on('click', function() {
        $('body').addClass('scroll')
        sideMenu.stop().animate({
            left: 0
        },500)
        bg.stop().fadeIn(200)
        headerLogo.css('position','fixed')
    });
    close.on('click', function() {
        $('body').removeClass('scroll')
        sideMenu.stop().animate({
            left: '-320px'
        },500)
        bg.stop().fadeOut(200)
    });
    let arrow = $('.arrow strong')
    arrow.on('click', function() {
        $(this).siblings().slideToggle(300)
    })
    let depth1 = $('.depth1 a')
    let depth2All = $('.depth2_bg')
    depth1.on('click', function() {
        $(this).siblings().slideToggle(300)
    });
    hideMenu.on('click', function() {
        let fontWeight = $(this).css('font-weight')
        if(fontWeight == "400") {
            $(this).css('font-weight','600')
        } else {
            $(this).css('font-weight','400')
        }
    })
})

/* let header = document.querySelector('.header-fix');
let menuIcon = document.querySelector('.left-menu')
let headerHeight = header.offsetHeight;
window.onscroll = function() {
    let windowTop = window.scrollY;
    if (windowTop <= headerHeight) {
        header.classList.add("start");
    } else {
        header.classList.remove('start')
    }
} */