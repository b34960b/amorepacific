(function($){
  
  let myWindow = $(window);
  let beforeW = myWindow.outerWidth(true);
  const mobile=767, tablet=1279, laptop=1919, pc=1920;
  const device = ['mobile', 'tablet', 'laptop', 'pc'];
  
  const slide = $('.slide');

  const DeviceSet = function(winW){
    if(winW <= mobile){
      nowSize = device[0];
      
      slide.children('.slide_01').find('img').attr('src','../img/slide/mo_slide_01.jpg');
      slide.children('.slide_02').find('img').attr('src','../img/slide/mo_slide_02.jpg');
      slide.children('.slide_03').find('img').attr('src','../img/slide/mo_slide_03.jpg');
      slide.children('.slide_04').find('img').attr('src','../img/slide/mo_slide_04.jpg');
      slide.children('.slide_05').find('img').attr('src','../img/slide/mo_slide_05.jpg');
      slide.children('.slide_06').find('img').attr('src','../img/slide/mo_slide_06.jpg');

      
      $('.find').find('img').attr('src','../img/btn_search.png');
      
    }else if(winW > mobile && winW <= tablet){
      nowSize = device[1];
      $('.find').find('img').attr('src','../img/btn_search.png');
      
    }else if(winW > tablet && winW <= laptop){
      nowSize = device[2];
    }else{
      nowSize = device[3];
    }
    return nowSize;
  };
    
  DeviceSet(beforeW);
  let beforDevice = DeviceSet(beforeW);
  

  let browser = navigator.userAgent.toLowerCase();
  let nowB = null;
    if(browser.indexOf('firefox') !== -1){
      nowB = 'firefox';
    }else{
      nowB = 'other'
    }
  
  myWindow.on('resize',function(){
    let nowWinW = myWindow.outerWidth();
    let afterDevice = DeviceSet(nowWinW);
    if(beforeW !== nowWinW && beforDevice !== afterDevice){
      if(nowB == 'firefox'){
        window.location = window.location;
      }else{
        location.reload();
      }
    }
  });

})(jQuery);