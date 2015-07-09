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

  // var lastScrollTop = 0;
  // $(window).scroll(function(event){
  //    var st = $(this).scrollTop();
  //    if (st > lastScrollTop){
  //       $('.navigation').addClass('is-hidden');
  //    } else {
  //       $('.navigation').removeClass('is-hidden');
  //    }
  //    lastScrollTop = st;
  // });

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