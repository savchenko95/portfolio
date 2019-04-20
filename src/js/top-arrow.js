var $ = require("jquery");

export function Arrow() {
    $('body').append(`
      <nav id="go-top">
        <svg class="svg-icon-arrow" viewBox="0 0 98.148 98.149" style="enable-background:new 0 0 98.148 98.149;"
     	 xml:space="preserve">
          <use id="up-arrow" class="arrow" href="/static/img/icons/up_arrow.svg#Capa_1"></use>
        </svg>
      </nav>`)

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
      };

      $(function() {
        $("#go-top").scrollToTop();
      });
    });
};
