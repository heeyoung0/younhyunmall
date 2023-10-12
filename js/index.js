$(function() {
    $('.header-popup a span').on('click', function() {
        $('.header-popup').slideUp(200)
    });


    let menu = $('.header-menu > li').slice(0,3);
    let hideMenu= $('.hide-menu');
    let gnbBg = $('.bg_gnb');
    let bgGnb2 = $('.depth2_bg');
    let shadow = $('.shadow-inner')
    let familySite = $('.right > .family-site')
    let hideSite = $('.right > .hide-site')

    menu.on('mouseover focusin', function() {
        $(this).addClass('on');
        $(this).children('.depth2_bg').stop().fadeIn(200)
        $('.bg_gnb').stop().fadeIn(200)
    })
    menu.on('mouseleave', function() {
        $(this).removeClass('on');
        $(this).children('.depth2_bg').stop().fadeOut(200)
        $('.bg_gnb').stop().fadeOut(200)
    })
    $('.bold').css('font-weight','600')
    $('.bold > span').css({'font-weight':'400'})
    $('.sub').css({'font-weight':'300'})

    familySite.on('click', function() {
        /* hideSite.addClass('show').animate({
            bottom: '100%',
            color: '#222'
        }) */
        hideSite.slideToggle('fast').css('display','block')
    })

    /* $('.header-nav').each(function() {
        let $header = $(this),
        headerBottom = $header.offset().top + $header.outerHeight();
        let $headerClone = $header.contents().clone();
        let $cover = $("<div class='start'></div>")
        $cover.html($headerClone);
        $cover.appendTo('body'); //body 영역안에 cover에 있는 태그가 삽입

        $(window).on('scroll', function() {
            //scrollTop의 위치값을 변수에 저장
            let scroll = Math.floor($(window).scrollTop());
            console.log(scroll)

            if (headerBottom < scroll) {
                $cover.addClass('active')
            } else {
                $cover.removeClass('active')
            }
        })
    }) */
})

let header = document.querySelector('header');
let headerHeight = header.offsetHeight;
window.onscroll = function() {
    let windowTop = window.scrollY;
    if (windowTop >= headerHeight) {
        header.classList.add("start");
    } else {
        header.classList.remove('start')
    }
}