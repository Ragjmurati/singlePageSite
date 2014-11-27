var main = function() {

};

$(document).ready(main);
$(document).on('scroll', function (e) {
  $('#nav').css('opacity', ($(document).scrollTop() / 500));
});
