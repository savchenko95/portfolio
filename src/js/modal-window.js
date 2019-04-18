var $ = require("jquery");

export function Modal(){
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
};
