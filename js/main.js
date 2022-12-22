(function ($) {
  "use strict";

  // offcanvas-js
  $('.offcanvas-open').click(function() {
    $('.offcanvas-menu').addClass('active');
    $('.offcanvas-overlay').addClass('active');
  });
  $('.offcanvas-menu a').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $('.close-offcanvas').click(function() {
    $('.offcanvas-menu').removeClass('active');
    $('.offcanvas-overlay').removeClass('active');
  });
  $(document).mouseup(function(e){
    var container = $(".offmenu");
  
    // If the target of the click isn't the container
    if(!container.is(e.target) && container.has(e.target).length === 0){
      $('.offcanvas-menu').removeClass('active');
      $('.offcanvas-overlay').removeClass('active');
    }
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











