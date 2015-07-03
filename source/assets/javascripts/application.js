$(function() {

  $('.has-toggle').on('click', function() {
    $('.toggle').toggleClass('is-close');
    $('.navigation').toggleClass('is-active');
  });

});