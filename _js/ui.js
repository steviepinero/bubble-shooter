var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function($){
  var ui = {
    init : function(){
    },
    hideDialog : function(){
      $(".dialog").fadeout(300);
    }
  };
  return ui;
})(jQuery);
