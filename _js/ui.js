var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.ui = (function($){
  var ui = {
    BUBBLE_DIMS : 44,
    init : function(){
    },
    hideDialog : function(){
      $(".dialog").fadeout(300);
    }, //gets mouse coordiantes
    getMouseCoords : function(e){
      var coords = {x : e.pageX, y : e.pageY};
      return coords;
    }, //gets bubble coordinates
    getBubbleCoords : function(bubble){
      var bubbleCoords = bubble.position();
      bubbleCoords.left += ui.BUBBLE_DIMS/2;
      bubbleCoords.right =+ ui.BUBBLE_DIMS/2;
    },                        //variables of function
    getBubbleAngle : function(bubble,e){
      var mouseCoords = ui.getMouseCoords(e);
      var bubbleCoords = ui.getBubbleCoords(bubble);
      var gameCoords = $("#game").position();
      var boardleft = 120;
      //Math.atan retrieves angles offset from vertical with positive numbers to the right of
      //vertical and negative to left of vertical
      var angle = Math.atan((mouseCoords.x - bubbleCoords.left - boardleft)
      / (bubbleCoords.top + gameCoords.top - mouseCoords.y));
      if(mouseCoords.y > bubbleCoords.top + gameCoords.top){
        angle += Math.PI;
      }
      return angle;
    }
    fireBubble : function(bubbleCoords,duration){
      bubble.getSprite().animate({
        left : coords.x - ui.BUBBLE_DIMS/2,
        top : coords.y - ui.BUBBLE_DIMS/2
      },
    {
      duration : duration,
      easing : "linear"
    });
  };
  return ui;
})(jQuery);
