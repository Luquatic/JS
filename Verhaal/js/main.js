$(document).ready(function() {
   vertel(1);
    $("#answers").delegate("a", "click", function() {
       vertel($(this).attr("data-stap"));
    });
});

function vertel(stap) {
    $("#answers").empty();

    if(stap == 1) {
        $("#story").html("Hey faggit! Wanna hear a story?");
        $("#answers").append("<li><a href='#' data-stap='2'>Sure..</a></li>");
        $("#answers").append("<li><a href='#' data-stap='3'>Fuck off</a></li>");
        $("img").hide();
    }

    if(stap == 2) {
        $("#story").html("Alright, here goes. You are ...");
        $("#answers").append("<li><a href='#' data-stap='4'>I am..?</a></li>");
        $("#answers").append("<li><a href='#' data-stap='5'>Never mind.</a></li>");
    }

    if(stap == 3) {
        $("#story").hide();
        $("#fuckOff").show();
    }

    if(stap == 4) {
        $("#story").html("a faggit");
        $("#end").show();
    }

    if(stap == 5) {
        $("#story").hide();
        $("#end").show();
    }
}