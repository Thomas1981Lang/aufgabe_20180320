$(document).ready(function () {



    /****************       TEXT 1       *************/



    $('.btn_text1').on('click', function () {
        var bannerlenge;
        var bannerPosStart
        var lauftext;
        var lauftextlenge;
        var loop;
        var sizeFont;
        var speed;
        var speedSlider;

        lauftext = $('.text1').html();
        
        
        lauftextlenge = lauftext.length;
        
        loop = $('#loop').val();
        
        sizeFont = $('#height').val();
        
        speedSlider = $('#speed').val();
        
        speed = lauftextlenge * sizeFont * speedSlider;
        
        bannerlenge = lauftextlenge * (sizeFont);
        console.log('test', sizeFont)
        bannerPosStart = bannerlenge * -1;
        console.log(lauftextlenge);
        for (var i = 0; i < loop; i++) {
            
            
            $('.video_banner').css({
                'height': sizeFont + 'px'
            });
            $('.video_lauf').css({
                'font-size': sizeFont + 'px',
                'height': sizeFont + 'px'
            });
            
            $('.video_lauf').html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });
            var textwidth = $('.text4').width();
            console.log('dfssdf',textwidth);
            textbreite = $('.video_lauf').width();
            console.log(textbreite);

            $('.video_lauf').animate({
                right: 0
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $('.video_lauf').html(lauftext).css({
                    'right': bannerPosStart,
                    'width': bannerlenge + 'px'
                });
            });
        }
    });


    /****************       TEXT 4       *************/



    $('.btn_text2').on('click', function () {
        var bannerlenge;
        var bannerPosStart
        var lauftext;
        var lauftextlenge;
        var loop;
        var sizeFont;
        var speed;
        var speedSlider;

        lauftext = $('.text2').html();
        
        
        lauftextlenge = lauftext.length;
        
        loop = $('#loop').val();
        
        sizeFont = $('#height').val();
        
        speedSlider = $('#speed').val();
        
        speed = lauftextlenge * sizeFont * speedSlider;
        
        bannerlenge = lauftextlenge * (sizeFont);
        console.log('test', sizeFont)
        bannerPosStart = bannerlenge * -1;
        console.log(lauftextlenge);
        for (var i = 0; i < loop; i++) {
            
            
            $('.video_banner').css({
                'height': sizeFont + 'px'
            });
            $('.video_lauf').css({
                'font-size': sizeFont + 'px',
                'height': sizeFont + 'px'
            });
            
            $('.video_lauf').html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });
            var textwidth = $('.text4').width();
            console.log('dfssdf',textwidth);
            textbreite = $('.video_lauf').width();
            console.log(textbreite);

            $('.video_lauf').animate({
                right: 0
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $('.video_lauf').html(lauftext).css({
                    'right': bannerPosStart,
                    'width': bannerlenge + 'px'
                });
            });
        }
    });



    /****************       TEXT 4       *************/



    $('.btn_text3').on('click', function () {
        var bannerlenge;
        var bannerPosStart
        var lauftext;
        var lauftextlenge;
        var loop;
        var sizeFont;
        var speed;
        var speedSlider;

        lauftext = $('.text3').html();
        
        
        lauftextlenge = lauftext.length;
        
        loop = $('#loop').val();
        
        sizeFont = $('#height').val();
        
        speedSlider = $('#speed').val();
        
        speed = lauftextlenge * sizeFont * speedSlider;
        
        bannerlenge = lauftextlenge * (sizeFont);
        console.log('test', sizeFont)
        bannerPosStart = bannerlenge * -1;
        console.log(lauftextlenge);
        for (var i = 0; i < loop; i++) {
            
            
            $('.video_banner').css({
                'height': sizeFont + 'px'
            });
            $('.video_lauf').css({
                'font-size': sizeFont + 'px',
                'height': sizeFont + 'px'
            });
            
            $('.video_lauf').html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });
            var textwidth = $('.text4').width();
            console.log('dfssdf',textwidth);
            textbreite = $('.video_lauf').width();
            console.log(textbreite);

            $('.video_lauf').animate({
                right: 0
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $('.video_lauf').html(lauftext).css({
                    'right': bannerPosStart,
                    'width': bannerlenge + 'px'
                });
            });
        }
    });



    /****************       TEXT 4       *************/

    $('.btn_text4').on('click', function () {
        var bannerlenge;
        var bannerPosStart
        var lauftext;
        var lauftextlenge;
        var loop;
        var sizeFont;
        var speed;
        var speedSlider;

        lauftext = $('.text4').html();
        
        
        lauftextlenge = lauftext.length;
        
        loop = $('#loop').val();
        
        sizeFont = $('#height').val();
        
        speedSlider = $('#speed').val();
        
        speed = lauftextlenge * sizeFont * speedSlider;
        
        bannerlenge = lauftextlenge * (sizeFont);
        console.log('test', sizeFont)
        bannerPosStart = bannerlenge * -1;
        console.log(lauftextlenge);
        for (var i = 0; i < loop; i++) {
            
            
            $('.video_banner').css({
                'height': sizeFont + 'px'
            });
            $('.video_lauf').css({
                'font-size': sizeFont + 'px',
                'height': sizeFont + 'px'
            });
            
            $('.video_lauf').html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });
            var textwidth = $('.text4').width();
            console.log('dfssdf',textwidth);
            textbreite = $('.video_lauf').width();
            console.log(textbreite);

            $('.video_lauf').animate({
                right: 0
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $('.video_lauf').html(lauftext).css({
                    'right': bannerPosStart,
                    'width': bannerlenge + 'px'
                });
            });
        }
    });










}); //document.ready