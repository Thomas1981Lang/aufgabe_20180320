/**
 *  Ticker Plugin
 *  
 */

$.fn.ticker = function (options, callback) {

    /*---------- PLUGIN SETTINGS Start ----------*/
    var settings = $.extend({
        text: '<pre>Der frühere Flüchtlingskoordinator des Bundes, Christian Konrad, hat mit Mitstreitern eine Allianz gegründet. „Menschen.Würde.Österreich“ soll Initiativen, NGOs und Einzelpersonen, die sich im Integrationsbereich engagieren, mehr öffentliches Gehör verschaffen. Außerdem will man auf die ÖVP-FPÖ-Bundesregierung einwirken, um Pläne noch einmal zu überdenken.</pre>',
        size: 16,
        speed: 15,
        loop: 1,
        videobreite: 1200,
        magic: 1
    }, options);
    /*---------- PLUGIN SETTINGS Ende ----------*/


    /*---------- CALLBACK OPTION -------------- */
    /*------ for a try - then not needed ----*/
    if (typeof callback == 'function') { 
        callback.call(this); 
    }


    /*---------- RETURN VALUES Start ----------*/
    return this.each(function () {
        var sizeFont;
        var lauftext;
        var lange;
        var speedSlider;
        var video;
        var speed;
        var loops;
        var bannerlenge;
        var bannerPosStart;
        var i;

        lauftext = settings.text;
        loops = settings.loop;
        sizeFont = settings.size;
        speedSlider = settings.speed;
        video = settings.videobreite;


        $(this).css({
            'font-size': sizeFont + 'px',
            'height': sizeFont + 'px'
        });


        lange = $('<div>').html(lauftext).find('pre').addClass('delete').css({
            'font-size': sizeFont + 'px',
            'font-family': 'Arial'
        }).appendTo('body')[0].scrollWidth;
        $('.delete').remove();



        speed = lange * speedSlider;


        for (i = 0; i < loops; i++) {




            bannerlenge = lange + video;
            bannerPosStart = bannerlenge * -1;


            $(this).html(lauftext).css({
                'right': bannerPosStart,
                'width': bannerlenge + 'px'
            });


            if (settings.magic == 1) {
                $(this).css({
                    'cursor': 'grabbing'
                }).hover(function () {
                    $(this).stop();
                }, function () {
                    $(this).animate({
                        right: 0
                    }, speed, 'linear', function () {
                        console.log('animation fertig');
                        $(this).html(lauftext).css({
                            'right': bannerPosStart + 'px',
                            'width': bannerlenge + 'px'
                        });
                    });
                }); //   this.hover
            } else {
                $(this).css({
                    'cursor': 'not-allowed'
                });
            } //   if

            $(this).animate({
                right: 0
            }, speed, 'linear', function () {
                console.log('animation fertig');
                $(this).html(lauftext).css({
                    'right': bannerPosStart + 'px',
                    'width': bannerlenge + 'px'
                });
            }); //this.animation


        } //   for loop



    }); //   return this.each

    /*---------- RETURN VALUES Start ----------*/


} // fn.ticker