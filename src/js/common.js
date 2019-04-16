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
      $('.modal-grid-container').css('transform', 'translate(-50%,-50%) scale(1)');

      var close = $(this).parent().find('.modal-close');
      close.on('click', function(){
          $('.modal-grid-container').css('transform', 'translate(-45%,-45%) scale(.1)');
          setTimeout(
            function() {
              $('.modal').removeClass('modal--active');
            }, 200
          );
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
