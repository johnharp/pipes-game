/*global Crafty*/
/*global Game*/

Crafty.scene('Loading', function () {
    "use strict";

    Crafty.e('2D, DOM, Text')
        .text('Loading...')
        .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
        .css(Game.text_css);

    Crafty.load(
        ['assets/sprites1.png'],
        function () {
            for ( var i = 0; i < Game.tileInfo.length; i++ ) {
                var obj = {};
                obj[Game.tileInfo[i].name] = Game.tileInfo[i].coord;
    
                Crafty.sprite(64, 'assets/sprites1.png', obj);
            }
    
            Crafty.scene('Game');
    });
});