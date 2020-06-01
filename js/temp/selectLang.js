(function($){

  const conBox = $('#conBox');
  const language = $('.language');
  const selectLang = $('.selectLang');

  selectLang.on('click',function(){
    language.css({'display':'block'});
  });
  conBox.on('click',function(){
    language.css({'display':'none'});
  });




})(jQuery);