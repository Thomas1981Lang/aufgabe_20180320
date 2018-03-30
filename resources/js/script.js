$(document).ready(function () {

    /***********    VAR     ***********/
    var lauftext;
    var loop;
    var sizeFont;
    var speedSlider;


    /*********    BUTTON 1    *********/

    $('.btn_text1').on('click', function () {

        $('.orf_admin').hide(200);
        lauftext = $('.text1').html();
        loop = $('#loop').val();
        sizeFont = $('#height').val();
        speedSlider = $('#speed').val();
        videobreite = $('.video').width();



        /**   BANNER BACKGROUND   **/

        $('.video_banner').css({
            'height': sizeFont + 'px'
        });



        /**  JQUERY TICKER  **/
        $('.video_lauf').ticker({
            text: lauftext,
            size: sizeFont,
            speed: speedSlider,
            loop: loop,
            videobreite: videobreite,
        });

    });
    /*********    BUTTON 2    *********/

    $('.btn_text2').on('click', function () {

        $('.orf_admin').hide(200);
        lauftext = $('.text2').html();
        loop = $('#loop').val();
        sizeFont = $('#height').val();
        speedSlider = $('#speed').val();
        videobreite = $('.video').width();



        /**   BANNER BACKGROUND   **/

        $('.video_banner').css({
            'height': sizeFont + 'px'
        });



        /**  JQUERY TICKER  **/
        $('.video_lauf').ticker({
            text: lauftext,
            size: sizeFont,
            speed: speedSlider,
            loop: loop,
            videobreite: videobreite,
            magic: 0
        });

    });

    /*********    BUTTON 3    *********/

    $('.btn_text3').on('click', function () {

        $('.orf_admin').hide(200);
        lauftext = $('.text3').html();
        loop = $('#loop').val();
        sizeFont = $('#height').val();
        speedSlider = $('#speed').val();
        videobreite = $('.video').width();



        /**   BANNER BACKGROUND   **/

        $('.video_banner').css({
            'height': sizeFont + 'px'
        });



        /**  JQUERY TICKER  **/

        $('.video_lauf').ticker({
            text: lauftext,
            size: sizeFont,
            speed: speedSlider,
            loop: loop,
            videobreite: videobreite
        }, function () {
            $('.orf_admin').show(800);
        });

        

    });


    /*********    BUTTON 4    *********/

    $('.btn_text4').on('click', function () {

        $('.orf_admin').hide(200);
        lauftext = $('.text4').html();
        loop = $('#loop').val();
        sizeFont = $('#height').val();
        speedSlider = $('#speed').val();
        videobreite = $('.video').width();



        /**   BANNER BACKGROUND   **/

        $('.video_banner').css({
            'height': sizeFont + 'px'
        });



        /**  JQUERY TICKER  **/
        $('.video_lauf').ticker({
            text: lauftext,
            size: sizeFont,
            speed: speedSlider,
            loop: loop,
            videobreite: videobreite,
            magic: 0
        });

    });



}); //document.ready