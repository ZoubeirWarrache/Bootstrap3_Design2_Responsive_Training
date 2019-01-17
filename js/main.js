$(function () {
    "use strict";

    // trigger nice scroll
    $("body").niceScroll({
        cursorcolor:"#ff8b38",
        cursorborder:"none",
        cursorwidth:"9px",
        zindex: 9999
    });

    // on scroll modify opacity of navbar with the class scrolled
    var navbar = $('.navbar');
    $(window).scroll(function () {

        if ($(window).scrollTop() >= navbar.height() && !navbar.hasClass('scrolled')) {

                navbar.addClass('scrolled');

        } else if ($(window).scrollTop() < navbar.height() && navbar.hasClass('scrolled')) {

                navbar.removeClass('scrolled'); 
        }
    });

    // Deal with tabs
    $('.tabs-section .tab-switch li').click(function () {

        // add selected class to active tab
        $(this).addClass('selected').siblings('li').removeClass('selected');

        // hide all divs
        $('.tabs-content > div').hide();

        // show div connected with this tab
        $('.' + $(this).data('class')).show();

    });
});