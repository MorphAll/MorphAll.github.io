$(document).ready(function () {
    // INIT PAGE
    $('body').fadeIn(1000);

    // HOME PAGE
    $('button:contains("HOME")').click(function (e) {
        e.preventDefault();
        $("#projects").fadeOut(500).promise().done(function(){
            $(".centered_image").fadeIn(500);
            $(".menu_text_position").fadeIn(500);
        });
    });

    // PROJECTS PAGE
    $('button:contains("PROJECTS")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position").fadeOut(500).promise().done(function(){
            $(".project_container").fadeIn(500);
        });
    });
    
    // GD PAGE
    $('button:contains("GAME DESIGN")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position, .project_container").fadeOut(500);
    });
    
    // CONTACT PAGE
    $('button:contains("CONTACT")').click(function (e) {
        e.preventDefault();
        $(".centered_image, .menu_text_position, .project_container").fadeOut(500);

    });
});