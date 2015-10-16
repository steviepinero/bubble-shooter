var BubbleShoot = window.BubbleShoot || {};
BubbleShoot.Board = (function($){
  var NUM_ROWS = 9;
  var NUM_COLS = 32;
  var Board = function(){
    var that = this;
    var rows = createLayout();
    this.getRows = function(){ return rows;};
    return this;
  };
  var createLayout = function(){
    var rows = [];
    for(var i=0; i<NUM_ROWS;i++){
      var bubble = BubbleShoot.Bubble.create(i,j);
      row[j] = bubble;
    };
    rows.push(row);
  };
  return Board
})(jQuery);
