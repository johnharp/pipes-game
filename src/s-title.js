/*global Crafty*/
/*global Game*/

Crafty.scene('Title', function () {
    "use strict";

    Crafty.e('2D, DOM, Text')
        .text('Title Screen')
        .attr({ x: 0, y: Game.height() / 2 - 24, w: Game.width() })
        .css(Game.text_css);


    
});