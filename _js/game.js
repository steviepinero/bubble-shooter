var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Game = (function($){
  var Game = function(){
    this.init = function(){
      $(".but_start_game").bind("click", startGame);
    };
  var startGame = function(){
    $(".but_start_game").unbind("click");
    BubbleShoot.ui.hideDialog();
    curBubble = getNextBubble();
    $("#game").bind("click",clickGameScreen);
    };
    // will recieve event object 'e' that gives coordinates of click
    var clickGameScreen = function(e){
      var angle = BubbleShoot.ui.getBubbleAngle(curBubble.getSprite(),e);
      var duration = 700;
      var distance = 1000;
      var distX = Math.sin(angle) * distance;
      var distY = Math.sin(angle) * distance;
      var bubbleCoords = BubbleShoot.ui.getBubbleCoords(curBubble.getSprite());
      var coords = {
        x : bubbleCoords.left + distX,
        y : bubbleCoords.top - distY
      };
      BubbleShoot.ui.fireBubble(curBubble,coords,duration);
    };
  };
  return Game;
})(jQuery);
