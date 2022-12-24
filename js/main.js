(function ($) {
  "use strict";

  // offcanvas-js
  $('.drop-canvas-open').click(function() {
    $('body').addClass('drop-canvas-opened');
  });
  $('.drop-canvas-close').click(function() {
    $('body').removeClass('drop-canvas-opened');
  });
  

  // owl-carousel
  $('.a__slider-active').owlCarousel({
    loop:false,
    margin:24,
    items:1,
    autoWidth:true,
    responsiveClass:true,
    nav:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
      0:{
        margin: 12
      },
      575:{
        margin: 15
      },
      1199:{
        margin:24
      }
  }
  });
  $('.b__slider-active').owlCarousel({
    loop:false,
    margin:24,
    items:1,
    autoWidth:true,
    responsiveClass:true,
    nav:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
        0:{
          margin: 12
        },
        575:{
          margin: 15
        },
        1199:{
          margin:24
        }
    }
  });
  $('.g-review-slider').owlCarousel({
    loop:false,
    margin:24,
    items:1,
    autoWidth:true,
    responsiveClass:true,
    nav:false,
    navText: ['<span class="fas fa-chevron-left fa-2x"></span>','<span class="fas fa-chevron-right fa-2x"></span>'],
    responsive:{
      0:{
        margin: 12
      },
      575:{
        margin: 15
      },
      1199:{
        margin:24
      }
  }
  });
        

})(jQuery);




$(document).ready(function(){

  // scroll up
  $(function(){
    $.scrollUp();
  });


  // preloader
  $("#preloader").fadeOut(500);

})











