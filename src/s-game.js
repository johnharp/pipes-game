/*global Crafty*/
/*global Game*/


Crafty.scene('Game', function () {
    'use strict';

    Game.init();
    var tray = Crafty.e('TileTray'),
        board = Crafty.e('Board'),
        spigotTileInfo,
        spigotTile,
        spigotLoc = Game.randomLoc();

    spigotLoc = Game.moveLocAwayFromEdge(spigotLoc);

    spigotTileInfo = Game.getRandomSpigotTileInfo();
    spigotTile = Crafty.e('Tile, ' + spigotTileInfo.name);
    Game.placeTile(spigotTile, spigotLoc);

    // spigotTile = Crafty.e('Tile, ' + spigotTileInfo.name)
    //             .attr({
    //             x: targetX,
    //             y: targetY
    //         });
    // Game.board[col][row] = spigotTile;


    board.onBoardClick(function (loc) {
        var coord = Game.locToCoord(loc);
        
        if (Game.board[loc.col][loc.row] === null) {
            var tile = tray.getTile();

            Game.board[loc.col][loc.row] = tile;
            tile.slideTo(coord);
        } else {
            var c = Crafty.e("2D, DOM, Color");
            c.color("rgba(255, 0, 0, 0.5)");
            c.x = coord.x;
            c.y = coord.y;
            c.w = Game.tileSize;
            c.h = Game.tileSize;
    
            c.timeout(function() {
                c.destroy();
            }, 1000);
        }
    });

});
