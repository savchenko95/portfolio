
var $ = require("jquery");



$(document).ready(function(){
  // Scroll----------------------
    $("a[href*=\\#]").on('click', function(e){
        var anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $(anchor.attr('href')).offset().top
        }, 800);
        e.preventDefault();
        return false;
    });
  //------------------------------
  // Modal-window-----------------
    $( '.project-card' ).on('click', function(){
      var open = $(this).parent().find('.modal');
      open.addClass('modal--active');

      var close = $(this).parent().find('.modal-close');
      close.on('click', function(){
          $('.modal').removeClass('modal--active');
      });
    });
  //------------------------------
  // Fade Out form after submit---
    var submitted=false;
    $('#gform').on('submit', function(e) {
      $('#gform *').hide(700);
      $('contact').height(300);
      setTimeout(
        function() {
          $('#gform').addClass('gform--hidden').append('Message sent...')
        }, 400
      );

    });
  //------------------------------
});
