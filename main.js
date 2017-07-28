            jQuery(function($){

                init();
                start();
                //$('img[usemap]').rwdImageMaps();                

                function init() {
                    $('.banner').show();
                    $('.content').hide();
                    $('.home-bar').hide();
                    $('.building').hide();
                }

                //新增一個addCookie變數名稱來存放cookie
                var addCookie = $.cookie('addCookie');

                //當cookie不等於空時
                if(addCookie!=null){
                    //alert(addCookie);
                    $('.skip').show();
                }

                function setCookie() {

                    var cookie = "ok";

                    $.cookie('addCookie', cookie);
                }

                function start() {
                    $('.skip').on('click', function() {
                        $('.banner').hide();
                        $('.content').show();
                        $('.circle').children('div').not('.snowmonster-flag').hide();
                        $('.home-bar').show();

                        var windowWidth = $( window ).width();

                        if(windowWidth < 769) {

                            $('.building').hide();
                        }
                        else {
                            $('.building').show();
                        }

                        scrollToAnchor('.content1');
                    });

                    $('.start-button').on('click', function() {
                        $('.slogan-back').hide();
                        $('.circle').css('visibility', 'visible');
                        $('.globe').removeClass('globe').addClass('globe-fixed');
                        $('.q1').show();
                        setCookie();
                    });

                    $('.home').on('click', function() {
                        window.location.reload();
                    });

                    // next question event
                    $('.answer').not('.q4-answer').on('click', function() {
                        var querstion = $(this).parent().attr('class');

                        $('.circle').children('div').not('.snowmonster-flag').hide();

                        if(querstion === "q1") {
                            $('.q2').show();
                        }
                        else if(querstion === "q2") {
                            $('.q3').show();
                        }
                        else if(querstion === "q3") {
                            $('.q4').show();
                        }

                    });

                    // q4 click answer and ascrooll to content
                    $('.q4').children('.answer').children('p').on('click', function() {
                        var answer = $(this).attr('class');

                        if(answer === "a1") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content1');
                                $('.home-bar').show();
                                $('.building').show();
                            });
                        }
                        else if(answer === "a2") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content2');
                                $('.home-bar').show();
                                $('.building').show();
                            });
                        }
                        else if(answer === "a3") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content3');
                                $('.home-bar').show();
                                $('.building').show();
                            });
                        }
                        else if(answer === "a4") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content4');
                                $('.home-bar').show();
                                $('.building').show();
                            });
                        }


                    });
                }

                function scrollToAnchor(el){
                    var top = $(el).offset().top;
                    $('html,body').animate({scrollTop: top},'slow');
                }

                // home bar fixed
                var nav = $('.home-bar');
                var building = $('.building');




                $(window).scroll(function () {
                    var thisTop = $(this).scrollTop();
                    var contentbg = $('.content');
                    var top1 = $('.content1').offset().top;
                    var top2 = $('.content2').offset().top - 110;
                    var top3 = $('.content3').offset().top - 110;
                    var top4 = $('.content4').offset().top - 110;
                    var buildingTop = $('.footer').offset().top - 800;

                    if (thisTop > 40 && thisTop < $('.footer').offset().top) {
                        nav.addClass("home-fixed");
                        building.removeClass("building-fixed");

                        if(thisTop > top1 && thisTop < top2) {
                            contentbg.css({transition: 'background-color 0.5s linear',background: '#FFDC02'});
                        }
                        else if(thisTop > top2 && thisTop < top3) {
                            contentbg.css({transition: 'background-color 0.5s linear',background: '#89CE41'});
                        }
                        else if(thisTop > top3 && thisTop < top4) {
                            contentbg.css({transition: 'background-color 0.5s linear',background: '#FF0000'});
                        }
                        else if(thisTop > top4 && thisTop < $('.footer').offset().top) {
                            contentbg.css({transition: 'background-color 0.5s linear',background: '#00B8F3'});

                            if(thisTop > buildingTop) {
                                building.removeClass("building-fixed");
                                building.addClass("building-fixed");
                            }
                        }
                    }
                    else if(thisTop > buildingTop) {
                        building.addClass("building-fixed");
                    }
                    else {
                        nav.removeClass("home-fixed");
                        building.removeClass("building-fixed");
                    }

                });                

                var windowWidth = $( window ).width();

                if(windowWidth < 769) {
                    //console.log(windowWidth);                    

                    mobileScreen();
                }

                $( window ).resize(function() {

                    if($( window ).width() > 768) {
                        $('.first-text').hide();
                        $('.sky').removeAttr('style');
                        $('.circle').removeAttr('style');
                        $('.head').removeAttr('style');
                        $('.content1').removeAttr('style');
                        $('.content2').removeAttr('style');
                        $('.content3').removeAttr('style');
                        $('.content4').removeAttr('style');
                        $('.content-header').removeAttr('style');
                        $('.result').removeAttr('style');
                        
                        $('img[usemap]').attr('width', 484);
                        $('img[usemap]').attr('height', 735);
                        $('.building').show();
                        $('.small-button').removeAttr('style');
                        
                        if($('.slogan-back').css('display') == 'none') {
                            $('.circle').css('visibility', 'visible');
                        }
                        else {
                            $('.circle').css('visibility', 'hidden');
                        }

                        if($('.q1').css('display') == 'block') {
                            $('.q1').show();
                        }
                        else if($('.q2').css('display') == 'block') {
                            $('.q2').show();
                        }
                        else if($('.q3').css('display') == 'block') {
                            $('.q3').show();
                        }
                        else if($('.q4').css('display') == 'block') {
                            $('.q4').show();
                        }
                        else {
                            $('.q1').show();
                        }

                        if($('.banner').css('display') == 'none') {
                            $('.building').show();
                        }
                        else {
                            $('.building').hide();
                        }

                    }
                    else if($( window ).width() < 769) {
                        var wh = $( window ).width() * 1.7786;
                        var buttonTop = wh / 1.176;

                        $('.sky').height(wh);
                        $('.circle').height(wh);
                        $('img[usemap]').attr('width', $( window ).width());
                        $('img[usemap]').attr('height', $( window ).width() * 1.520);

                        // home-bar resize height
                        var mbHomeBarHeight = $( window ).width() / 7.0135;
                        $('.content-header').height(mbHomeBarHeight);

                        // 2.3 : 1 = button : window height
                        var mbBtnH =  $( window ).width() / 2.3;
                        $('.small-button').width(mbBtnH);
                        $('.small-button').height(mbBtnH);

                        // answer light box width and height
                        var mbAnswerHeight = $( window ).width() / 3.583;

                        $('.result').width($( window ).width() - 30);
                        $('.result').height(mbAnswerHeight);

                        // content head resize
                        var mbHeadHeight = $( window ).width() / 9.55555;

                        $('.head').width($( window ).width());
                        $('.head').height(mbHeadHeight);

                        // head top
                        var headTop = $( window ).height() /10;

                        $('.head').css('margin-bottom', headTop/2 + 'px');

                        // item top
                        var itemTop = $( window ).height() /8;

                        $('.content1').css('padding-top', itemTop + 'px');
                        $('.content2').css('padding-top', itemTop + 'px');
                        $('.content3').css('padding-top', itemTop + 'px');
                        $('.content4').css('padding-top', itemTop + 'px');

                        mobileScreen();

                    }

                });

                function mobileScreen() {

                    // 750/1334 = 1.7786 手機圖的長寬比
                    var wh = $( window ).width() * 1.7786;

                    // 1.17814 is button offset bottom
                    var buttonTop = wh / 1.176;

                    // 5.370 : 1 = button : window height
                    var mbBtnH =  $( window ).width() / 2.3;

                    $('.small-button').width(mbBtnH);
                    $('.small-button').height(mbBtnH);

                    // home-bar resize height
                    var mbHomeBarHeight = $( window ).width() / 7.0135;

                    $('.content-header').height(mbHomeBarHeight);

                    // answer light box width and height
                    var mbAnswerHeight = $( window ).width() / 3.583;

                    $('.result').width($( window ).width() - 30);
                    $('.result').height(mbAnswerHeight);

                    // content head resize
                    var mbHeadHeight = $( window ).width() / 9.55555;

                    $('.head').width($( window ).width());
                    $('.head').height(mbHeadHeight);

                    // head top
                    var headTop = $( window ).height() /10;

                    $('.head').css('margin-bottom', headTop/2 + 'px');

                    // item top
                    var itemTop = $( window ).height() /8;

                    $('.content1').css('padding-top', itemTop + 'px');
                    $('.content2').css('padding-top', itemTop + 'px');
                    $('.content3').css('padding-top', itemTop + 'px');
                    $('.content4').css('padding-top', itemTop + 'px');

                    $('.sky').height(wh);
                    $('.circle').height(wh);

                    initMobile();
                }

                function initMobile() {
                    $('.q1').hide();
                    $('.q2').hide();
                    $('.q3').hide();
                    $('.q4').hide();
                    $('.building').hide();

                    if($('.circle').css('display') == 'none') {
                        $('.first-text').hide();
                    }
                    else {
                        $('.first-text').hide();
                    }

                    $('img[usemap]').attr('width', $( window ).width());
                    $('img[usemap]').attr('height', $( window ).width() * 1.520);

                    mbButtonEvent();
                }

                function mbButtonEvent() {
                    $('.small-button').on('click', function() {

                        // only one question
                        $('.skip').hide();
                        $('.first-text').hide();
                        $('.circle').show();
                        $('body').scrollTop(0);
                        $('.circle').css('visibility', 'visible');
                        $('.q5').show();
                        setCookie();

                    });

                    // q5 click answer and ascrooll to content
                    $('.q5').children('.answer').children('p').on('click', function() {
                        var answer = $(this).attr('class');
                        $(this).addClass('active');
                        if(answer === "b1") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content1');
                                $('.home-bar').show();
                                
                            });
                        }
                        else if(answer === "b2") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(3000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content2');
                                $('.home-bar').show();
                                
                            });
                        }
                        else if(answer === "b3") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content3');
                                $('.home-bar').show();
                                
                            });
                        }
                        else if(answer === "b4") {

                            $('.light-box').fadeIn('slow', function () {
                                $(this).delay(1000).fadeOut('slow');

                                $('.banner').hide();
                                $('.content').show();
                                $('.circle').children('div').not('.snowmonster-flag').hide();

                                scrollToAnchor('.content4');
                                $('.home-bar').show();
                                
                            });
                        }

                    });

                }
                
                $('map').imageMapResize();

            });