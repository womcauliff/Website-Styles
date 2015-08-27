// --------------------------------------
//  Download Video
// --------------------------------------

$(function() {
  $('.download').on('click', function(e) {
    var video = $(this).data('video');
    if (video) {
      $('.video.video--modal').addClass('is-shown');
      $('.video-modal').append(video).fitVids();
      e.preventDefault();
    }
  });
  $('.video-close').on('click', function() {
    $('.video.video--modal').removeClass('is-shown');
    $('.video-modal').empty();
  });
  $(window).on('keyup', function(e) {
    if (e.keyCode == 27) {
      $('.video.video--modal').removeClass('is-shown');
      $('.video-modal').empty();
    }
  });
});

// --------------------------------------
//  FitVids
// --------------------------------------

$(function() {
  $('.video').fitVids();
})

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
    src: 'https://s3.amazonaws.com/nacdvideo/bgloop.mp4',
    type: 'mp4'
  }
], true);
