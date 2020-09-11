/*global Crafty*/
/*global Game*/

Crafty.c('Board', {
    init: function () {
        'use strict';
        this.requires('2D, Canvas, Color, Mouse');
        this.attr({
            x: Game.boardMargin,
            y: Game.boardMargin,
            w: Game.boardCols * Game.tileSize,
            h: Game.boardRows * Game.tileSize
        });
        this.color('#ddd');
    },

    onBoardClick: function (fn) {
        'use strict';

        this.bind('Click', function (e) {
            var coord = { x: e.realX, y: e.realY },
                loc = Game.coordToLoc(coord);

            fn(loc);
        });
    }
});
