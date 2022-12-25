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
  $('.d-slider-active').owlCarousel({
    loop:false,
    margin:24,
    items:1,
    autoWidth:true,
    responsiveClass:true,
    nav:false,
    dots:false,
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



$(document).ready(function(){
  $('.counter').each(function(){
      var thisis = $(this);
      var time = 1000;
      var step = 400;
      var value = $(this).text();
      $(this).attr('value',value)
      var valueF = $(this).attr('value');
      if($(thisis).length){
          $(window).scroll(function(){
            if ( $(thisis).offset().top < ($(window).scrollTop() + $(window).height() - 20) ) {
               if (($(thisis).hasClass('counterup-done'))) {
               }else{
                  $(thisis).addClass('counterup');
               }
            }
            if ($(thisis).hasClass('counterup')) {
              setTimeout( function(){
                  $(thisis).removeClass('counterup');
                  $(thisis).addClass('counterup-done')
              }  , time );
            }
            if ($(thisis).hasClass('counterup')) {
              if (valueF.indexOf('.') > -1) {
                  var nbr = valueF;
                  var afd = (nbr!=Math.floor(nbr))?(nbr.toString()).split('.')[1].length:0;
                  for (let i = 0; i < ((step - 1) + 1); i++) {
                      setTimeout( function(){ 
                          var calv = ((valueF/step) + i*(valueF/step));
                          $(thisis).text(calv.toFixed(afd));
                      }  , time/step*i );
                  }
              }else{
                  for (let i = 0; i < ((step - 1) + 1); i++) {
                      setTimeout( function(){ 
                          var calv = (Math.floor((valueF/step) + i*(valueF/step)));
                          $(thisis).text(calv.toString().replace(/\D/g, '').replace(/\B(?=(\d{3})+(?!\d))/g, ','));
                      }  , time/step*i );
                  }
              }
            }
          }); 
      };
  });
});










