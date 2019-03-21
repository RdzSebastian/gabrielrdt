 $(document).ready(function(){

    // hide #back-top first
    $("#back-home");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-home');
            } else {
                $('#back-home');
            }
        });

        // scroll body to 0px on click
        $('#back-home a').click(function () {
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
    });

    });


 $(document).ready(function(){

    // hide #back-top first
    $("#back-sobremi");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-sobremi');
            } else {
                $('#back-sobremi');
            }
        });

        // scroll body to 0px on click
        $('#back-sobremi a').click(function () {
            $('body,html').animate({
                scrollTop:$('#sobremi').offset().top }, 800);
            return false;
        });
    });

    });


  $(document).ready(function(){

    // hide #back-top first
    $("#back-trayectoria");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-trayectoria');
            } else {
                $('#back-trayectoria');
            }
        });

        // scroll body to 0px on click
        $('#back-trayectoria a').click(function () {
            $('body,html').animate({
                scrollTop:$('#trayectoria').offset().top }, 800);
            return false;
        });
    });

    });

  $(document).ready(function(){

    // hide #back-top first
    $("#back-fotos");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-fotos');
            } else {
                $('#back-fotos');
            }
        });

        // scroll body to 0px on click
        $('#back-fotos a').click(function () {
            $('body,html').animate({
                scrollTop:$('#fotos').offset().top }, 800);
            return false;
        });
    });

    });

  $(document).ready(function(){

    // hide #back-top first
    $("#back-entrevistas");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-entrevistas');
            } else {
                $('#back-entrevistas');
            }
        });

        // scroll body to 0px on click
        $('#back-entrevistas a').click(function () {
            $('body,html').animate({
                scrollTop:$('#entrevistas').offset().top }, 800);
            return false;
        });
    });

    });

    $(document).ready(function(){

    // hide #back-top first
    $("#back-jugadores");

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-jugadores');
            } else {
                $('#back-jugadores');
            }
        });

        // scroll body to 0px on click
        $('#back-jugadores a').click(function () {
            $('body,html').animate({
                scrollTop:$('#jugadores').offset().top }, 800);
            return false;
        });
    });

    });