"use strict"
$(document).ready(function() {
        $('.burger').click(function(event) {
        $(".burger, .nav__menu").toggleClass('active');
        $('body').toggleClass('lock');
    });
});