/*global Crafty*/
/*global Game*/

Crafty.c('TileTray', {
    init: function () {
        'use strict';
        var i, tile, col, row;

        this.requires('DOM');
        // this.color('#ddd');
        this.attr(
            {
                x: (2 * Game.boardMargin) + (Game.boardCols * Game.tileSize),
                y: Game.boardMargin,
                w: Game.tileSize,
                h: Game.boardRows * Game.tileSize,
                z: -1
            }
        );

        this._tiles = [];

        col = Game.boardCols - 1;
        for( i = 0; i <Game.boardRows; i++) {
            if (i === 1) continue; // leave a gap between the next tile to be used and the "bench"

            row = i;
            tile = this.chooseRandomTile()
                .attr({
                    x: this.x,
                    y: this.y + (Game.tileSize * i),
                    z: 10
                });
            //tile.at(col, row);
            this._tiles.push(tile);
        }
    },

    chooseRandomTile: function() {
        'use strict';

        var tileInfo,
            newTile;

        tileInfo = Game.getRandomPipeTileInfo();
        newTile = Crafty.e('Tile, ' + tileInfo.name);

        return newTile;

        
        // var newTile,
        //     sprite,
        //     rand = Math.random();

        //     sprite = 'spr_pipe_ns';
        //     if (0.10 <= rand < 0.20) sprite = 'spr_pipe_we';
        //     else if (0.20 <= rand < 0.30) sprite = 'spr_pipe_ne';
        //     else if (0.30 <= rand < 0.40) sprite = 'spr_pipe_se';
        //     else if (0.40 <= rand < 0.50) sprite = 'spr_pipe_x';
        //     else if (0.50 <= rand < 0.60) sprite = 'spr_pipe_nw';
        //     else if (0.60 <= rand) sprite = 'spr_pipe_sw';
 
        //     newTile = Crafty.e('Tile, ' + sprite).attr({z: 10});

        //     return newTile;
            
    },

    pushRandomTile: function () {
        'use strict';
        var tile = this.chooseRandomTile()
            .attr({
                x: this.x,
                y: this.y + (Game.tileSize * Game.bordRows)
            });
		this._tiles.push(tile);

		return tile;
    },

    getTile: function () {
        'use strict';
        var i,
            targetRow;

        if (this._tiles.length <= 0) return;

        this.pushRandomTile();
        var tile = this._tiles.shift();

        // try to move the 0 tile to the upper right
        // for all other tiles, move to the position 2 and below
        // leave position 1 open

        for ( i=0; i<this._tiles.length; i++ ) {
            if (i === 0 ) targetRow = 0;
            else targetRow = i+1;

            this._tiles[i].slideTo({x: this.x, y: this.y + (targetRow * Game.tileSize)});
        }

        return tile;
    }
});