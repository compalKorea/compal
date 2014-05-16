jQuery(function($){

    var COMAPL = window.COMAPL || {};

    /* ==================================================
     Mobile Navigation
     ================================================== */
    var mobileMenuClone = $('#menu').clone().attr('id', 'navigation-mobile');

    COMAPL.mobileNav = function(){
        var windowWidth = $(window).width();

        if( windowWidth <= 979 ) {
            if( $('#mobile-nav').length > 0 ) {
                mobileMenuClone.insertAfter('#menu');
                $('#navigation-mobile #menu-nav').attr('id', 'menu-nav-mobile');
            }
        } else {
            $('#navigation-mobile').css('display', 'none');
            if ($('#mobile-nav').hasClass('open')) {
                $('#mobile-nav').removeClass('open');
            }
        }
    }

    COMAPL.listenerMenu = function(){
        $('#mobile-nav').on('click', function(e){
            $(this).toggleClass('open');

            if ($('#mobile-nav').hasClass('open')) {
                $('#navigation-mobile').slideDown(500, 'easeOutExpo');
            } else {
                $('#navigation-mobile').slideUp(500, 'easeOutExpo');
            }
            e.preventDefault();
        });

        $('#menu-nav-mobile a').on('click', function(){
            $('#mobile-nav').removeClass('open');
            $('#navigation-mobile').slideUp(350, 'easeOutExpo');
        });
    }

    /* ==================================================
     Navigation Fix
     ================================================== */

    COMAPL.nav = function(){
        $('.sticky-nav').waypoint('sticky');
    }

    /* ==================================================
     Menu Highlight
     ================================================== */

    COMAPL.menu = function(){
        $('#menu-nav, #menu-nav-mobile').onePageNav({
            currentClass: 'current',
            changeHash: false,
            scrollSpeed: 750,
            scrollOffset: 30,
            scrollThreshold: 0.5,
            easing: 'easeOutExpo',
            filter: ':not(.external)'
        });
    }

    /* ==================================================
     Init
     ================================================== */
    $(document).ready(function(){
        // Preload the page with jPreLoader
        $('body').jpreLoader({
            splashID: "#jSplash",
            showSplash: true,
            showPercentage: true,
            autoClose: true,
            splashFunction: function() {
                $('#circle').delay(250).animate({'opacity' : 1}, 500, 'linear');
            }
        });

        COMAPL.nav();
        COMAPL.mobileNav();
        COMAPL.listenerMenu();
        COMAPL.menu();
    });

    $(window).resize(function(){
        COMAPL.mobileNav();
    });

});