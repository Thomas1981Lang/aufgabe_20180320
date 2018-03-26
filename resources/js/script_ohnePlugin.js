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
        var videobreite

        /*----------  Höhe der Banner   ---------- */
        sizeFont = $('#height').val();
        $('.video_banner').css({
            'height': sizeFont + 'px'
        });

        $('.video_lauf').css({
            'font-size': sizeFont + 'px',
            'height': sizeFont + 'px'
        });

        /*----------  Text übergeben     ---------*/
        lauftext = $('.text1').html();
        console.log('text1',lauftext);

        var lange = $('<div>').html(lauftext).find('pre').css({
            'font-size': sizeFont + 'px',
            'font-family': 'Arial'
        }).appendTo('body')[0].scrollWidth;


        console.log(lange);







        speedSlider = $('#speed').val();

        videobreite = $('.video').width();
        console.log('videobreite', videobreite);

        speed = lange * speedSlider;


        
        
        
        
        
        loop = $('#loop').val();
        for (var i = 0; i < loop; i++) {
            
    
            bannerlenge = lange + videobreite;
            console.log('bannerlänge', bannerlenge)
            bannerPosStart = bannerlenge * -1;
           
            $('.video_lauf').html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });

            $('.video_lauf').animate({
                right: 0 
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $('.video_lauf').html(lauftext).css({
                    'right': bannerPosStart  + 'px',
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
            console.log('dfssdf', textwidth);
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
            console.log('dfssdf', textwidth);
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
            console.log('dfssdf', textwidth);
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