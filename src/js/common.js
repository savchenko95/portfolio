
var $ = require("jquery");

// Scroll----------------------

$(document).ready(function(){
    $("a[href*=\\#]").on("click", function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 1000);
        e.preventDefault();
        return false;
    });
});

//------------------------------
