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
  // Go top arrow-----------------
  $('body').append(`
    <nav id="go-top">
      <svg class="svg-icon-arrow">
        <use id="up-arrow" class="arrow" href="/static/img/icons/up_arrow.svg#Capa_1"></use>
      </svg>
    </nav>`);
  });

  $(function() {
    $.fn.scrollToTop = function() {
      $(this).hide().removeAttr("href");
      if ($(window).scrollTop() >= "500") $(this).fadeIn(500)
      var scrollDiv = $(this);
      $(window).scroll(function() {
        if ($(window).scrollTop() <= "500") $(scrollDiv).fadeOut(300)
        else $(scrollDiv).fadeIn("slow")
      });
      $(this).click(function() {
        $("html, body").animate({scrollTop: 0}, "slow")
      })
    }
    $(function() {
      $("#go-top").scrollToTop();
    });
});
