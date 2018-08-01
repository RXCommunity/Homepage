$(window).on ("load resize", function() {
    if ($(window).width() < 720) {
        $('#style').attr('href','res/stylesheet-min.css');
    }
    else {
        $('#style').attr('href','res/stylesheet.css');
    }
});