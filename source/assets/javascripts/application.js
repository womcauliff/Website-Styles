// --------------------------------------
//  Navigation Toggle
// --------------------------------------

$(function() {

  $('.has-toggle').on('click', function() {
    $('.toggle').toggleClass('is-close');
    $('.navigation').toggleClass('is-active');
  });

  $('.navigation-search, #navigation-searchOpen').on('click', function() {
    $('.navigation-search').addClass("is-searching");
  });
  $('#navigation-searchClose').on('click', function() {
    $('.navigation-search').removeClass("is-searching");
  });
  $(window).on('keyup', function(e) {
    if (e.keyCode == 27) {
      $('.navigation-search').removeClass('is-searching');
    }
  });

});

// --------------------------------------
//  Background Video
//  -> References vendor.js
// --------------------------------------

var home = document.getElementById("hero-home");
vidbg(home, [
  {
    src: 'assets/videos/placeholder.mp4',
    type: 'mp4'
  }
], true);