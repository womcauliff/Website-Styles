// --------------------------------------
//  Navigation Toggle
// --------------------------------------

$(function() {

  $('.has-toggle').on('click', function() {
    $('.toggle').toggleClass('is-close');
    $('.navigation').toggleClass('is-active');
  });

});

// --------------------------------------
//  Background Video
//  -> References vendor.js
// --------------------------------------

var homepage = document.getElementsByClassName("index")[0];
vidbg(homepage, [
  {
    src: 'assets/videos/placeholder.mp4',
    type: 'mp4'
  }
], true);
console.log(homepage);