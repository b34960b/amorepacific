(function($){

  const body = $('body');
  const headBox = $('#headBox');
  const footBox = $('#footBox');

  const JsLink = (temp) => {
    return body.append(`<script src="../js/temp/${temp}.js"></script>`);
  };

  footBox.load('./temp/footer.html', function(){
    JsLink('selectLang');
  });
  
  headBox.load('./temp/header.html', function(){
    JsLink('gnb');
    JsLink('header_rwd');
  });




})(jQuery);