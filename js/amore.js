// amore.js
(function($){


  // slide ----------------------------------------------
  
  const slide = $('.slide');
  let i = 0;
  const next = $('.next');
  const prev = $('.prev');
  // const slideLen  = slideLi.length;

  setInterval(function () {
    i++;
    if(i>=6){i=0;}
    slide.find('div').eq(i).siblings().fadeOut();
    slide.find('div').eq(i).fadeIn();
  },3000);
    

})(jQuery);