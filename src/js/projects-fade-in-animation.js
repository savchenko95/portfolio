var $ = require("jquery");

export function ProjectFadeInAnimation() {
  var $target = $('.projects-grid-container > .grid-items');
  var hold = 200;

  $(function() {
    $.fn.fadeInProject = function() {
      if ($(window).scrollTop() >= "3200") $.each($target, function(i,t){
        var $this = $(t);
        setTimeout(function() {
          $this.fadeIn('slow');
        }, i*hold);
      });

      var scrollDiv = $(this);

      $(window).scroll(function() {
        if ($(window).scrollTop() <= "3200") $(scrollDiv).fadeIn('slow');
        else $(scrollDiv).fadeIn('slow');
      });
    };

    $(function() {
      $target.fadeInProject();
    });
  });
};
