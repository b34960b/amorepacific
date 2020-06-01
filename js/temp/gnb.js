(function($){

  // gnb pc size slideUp & Down
  const gnb = $('.gnb');
  const gnbUl = gnb.children('ul');
  const gnbLi = gnbUl.children('li');
  const gnbLink = gnbLi.children('a');

  gnbLink.on('mouseenter focus', function () {
    $(this).siblings('div').stop().slideDown();
  });
  gnbLink.siblings('div').on('mouseleave', function(){
    $(this).stop().slideUp();
  });


  // gnb mobile & tablet size menu icon
  const menuIconSide = $('.menu_icon_side');
  const menuOpen = $('.menu').children('a');
  const menuClose = $('.m_side_top').children('button');
  
  menuOpen.on('click',function(){
    $(this).addClass('active');
    menuIconSide.addClass('active');
  });
  menuClose.on('click', function(){
    menuOpen.removeClass('active');
    menuIconSide.removeClass('active');
  });
  

  // gnb pc size gnb clone
  const fInside = $('.f_inside');
  gnb.clone().appendTo(menuIconSide);
  fInside.clone().appendTo(menuIconSide);


  // mobile & tablet side menu slideUp & Down
  $('.gnb_li').children('a').on('click', function(e){
    e.preventDefault();
    $('.gnb_li').find('.sub_gnb').stop().slideUp();
    $(this).siblings('div').children('.sub_gnb').stop().slideDown();
  });
    

  const gnbLnguage = $('.language');
  const gnbSelectLang = $('.selectLang');

  gnbSelectLang.on('click', function(){
    gnbLnguage.toggleClass('block');
  });

  





})(jQuery);