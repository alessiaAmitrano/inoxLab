(function($) {
'use strict';

/* Loader */
$(window).on('load', function() {
  $('.preloader').fadeOut();
  $('#preloader').delay(550).fadeOut('slow');
  $('body').delay(450).css({'overflow': 'visible'});
});

/* Navbar Bar */
$('.navbar-nav .nav-link').on('click', function() {
  var toggle = $('.navbar-toggler').is(':visible');
  if (toggle) {
    $('.navbar-collapse').collapse('hide');
  }
});

/* Scroll To Top */
$(document).ready(function() {
  $(window).scroll(function() {
    if ($(this).scrollTop() > 100) {
      $('#scroll-to-top').fadeIn();
    } else {
      $('#scroll-to-top').fadeOut();
    }
  });

  $('#scroll-to-top').click(function() {
    $('html, body').animate({scrollTop: 0}, 600);
    return false;
  });
});
}(jQuery));
