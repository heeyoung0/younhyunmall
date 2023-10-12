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
    //let run = $('.login-left-cont');
    let member = $('.login-member a')
    member.on('click', function() {
        let idx = $(this).index();
        let tab = $(this).parents().siblings('.login-tab').eq(idx);
        console.log(tab)
        $(this).addClass('run')
        $(this).siblings().removeClass('run')
        $(tab).addClass('run')
        $(tab).siblings().removeClass('run')
    })
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
//
window.Kakao.init("265d73395506ac93a7e2c1dcf344d32d")

function kakaoLogin() {
    window.Kakao.Auth.loginForm({
        scope: 'profile_nickname, profile_image, account_email, gender',
        success: function(authObj) {
            console.log(authObj)
            window.Kakao.API.request({
                url: '/v2/user/me',
                success: res => {
                    const kakao_account = res.kakao_account;
                    console.log(kakao_account)
                }
            })
        }
    })
}
