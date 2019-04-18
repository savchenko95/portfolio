var $ = require("jquery");

export function Form() {
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
};
