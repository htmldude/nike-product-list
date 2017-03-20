(function(){
  $(document).ready(function(){
    
    var overlay = $('.overlay');
    var popup = $('.popup');
    var button = $('#button');
    var close = $('#close');
    
    button.add(close).click(function(){
      overlay.add(popup).toggleClass('visible');
    });

    button.click(function(){
      var scroll = $(document).scrollTop() + 20;
      popup.css('top', scroll + 'px');
    });

    overlay.click(function(){
      overlay.add(popup).removeClass('visible');
    });
    
  });
})();
