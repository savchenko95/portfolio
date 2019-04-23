var $ = require("jquery");

export function Sidebar() {
  $('body').append(`
    <nav id="sidebar" class="sidebar">
      <a class="sidebar-link" href="#about">
        <svg class="sidebar-link-icon" viewBox="0 0 60 60" xml:space="preserve">
          <use href="/static/img/icons/about_me.svg#Capa_1"></use>
        </svg>
      </a>
      <a class="sidebar-link" href="#skills">
        <svg class="sidebar-link-icon" viewBox="0 0 480 480" style="enable-background:new 0 0 480 480;" xml:space="preserve">
          <use href="/static/img/icons/my_skills.svg#Capa_1"></use>
        </svg>
      </a>
      <a class="sidebar-link" href="#projects">
        <svg class="sidebar-link-icon" viewBox="0 0 222.528 222.528" style="enable-background:new 0 0 222.528 222.528;"
     	 xml:space="preserve">
          <use href="/static/img/icons/projects.svg#Capa_1"></use>
        </svg>
      </a>
      <a class="sidebar-link" href="#contact">
        <svg class="sidebar-link-icon" viewBox="0 0 512 343.7" xml:space="preserve">
          <use href="/static/img/icons/contact.svg#Capa_1"></use>
        </svg>
      </a>
    </nav>`)

    $(function() {
      $("a[href*=\\#]").on('click', function(e){
        var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top
      }, 800);
      e.preventDefault();
      return false;
      });
    });

    $(function() {
      $.fn.scrollToLink = function() {
        $(this).removeAttr("href");
        if ($(window).scrollTop() >= "1650") $(this).css('transform', 'translateX(200px)');

        var scrollDiv = $(this);

        $(window).scroll(function() {
          if ($(window).scrollTop() <= "1650") $(scrollDiv).css('transform', 'translateX(0)');
          else $(scrollDiv).css('transform', 'translateX(200px)');
        });
      };

      $(function() {
        $("#sidebar").scrollToLink();
      });
    });
  };
