(function($){
  
  let myWindow = $(window);
  let beforeW = myWindow.outerWidth(true);
  const mobile=767, tablet=1279, laptop=1919, pc=1920;
  const device = ['mobile', 'tablet', 'laptop', 'pc'];
  

  const DeviceSet = function(winW){
    if(winW <= mobile){
      nowSize = device[0];
      $('.find').find('img').attr('src','/img/btn_search.png');
      
    }else if(winW > mobile && winW <= tablet){
      nowSize = device[1];
      $('.find').find('img').attr('src','/img/btn_search.png');
      
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