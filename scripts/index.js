$(document).ready(function () {
    // INIT PAGE
    $('body').fadeIn(1000).removeClass('hidden');

    $('button:contains("HOME")').click(function (e) {
        e.preventDefault();
        $(".centered_image").fadeIn();
        $(".menu_text_position").fadeIn();
    });
    $('button:contains("PROJECTS")').click(function (e) {
        e.preventDefault();
        $(".centered_image").fadeOut();
        $(".menu_text_position").fadeOut();
    });
    $('button:contains("GAME DESIGN")').click(function (e) {
        e.preventDefault();
        $(".centered_image").fadeOut();
        $(".menu_text_position").fadeOut();
    });
    $('button:contains("CONTACT")').click(function (e) {
        e.preventDefault();
        $(".centered_image").fadeOut();
        $(".menu_text_position").fadeOut();
    });
});