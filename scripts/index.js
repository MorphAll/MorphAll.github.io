$(document).ready(function () {
    // INIT PAGE
    $('body').fadeIn(1000);

    // HOME PAGE
    $('button:contains("HOME")').click(function (e) {
        e.preventDefault();
        $("#projects, #gd, #about").fadeOut(500).promise().done(function(){
            $(window).scrollTop(0);
            $(".centered_image").fadeIn(500);
            $(".menu_text_position").fadeIn(500);
        });
    });

    // PROJECTS PAGE
    $('button:contains("PROJECTS")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position, #gd, #about").fadeOut(500).promise().done(function(){
            $(window).scrollTop(0);
            $("#projects").fadeIn(500);
        });
    });
    
    // GD PAGE
    $('button:contains("GAME DESIGN")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position, #projects, #about").fadeOut(500).promise().done(function () {
            $(window).scrollTop(0);
            $("#gd").fadeIn(500);
        });
    });
    
    // CONTACT PAGE
    $('button:contains("ABOUT")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position, #projects, #gd").fadeOut(500).promise().done(function () {
            $(window).scrollTop(0);
            $("#about").fadeIn(500);
        });
    });
});
