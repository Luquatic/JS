$(document).ready(function() {
    resize();
    $("#box").hover(function() {
        $(this).toggleClass("boxLarge");
    });
});

$(window).resize(function() {
    resize();
});

function resize() {
    $("#box").css("left", (($(window).width() - $("#box").width()) / 2));
    $("#box").css("top", (($(window).height() - $("#box").height()) / 2));
}