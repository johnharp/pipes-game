/*global Crafty*/

var Game = {
    boardCols: 10,
    boardRows: 10,
    boardMargin: 10, // pixels of space around the board
    tileSize: 64, // pixels
    numPipeTiles: 7,
    numSpigotTiles: 4,

    tileInfo: [
        {name: 'spr_pipe_ns', coord: [0, 0]},
        {name: 'spr_pipe_we', coord: [1, 0]},
        {name: 'spr_pipe_ne', coord: [2, 0]},
        {name: 'spr_pipe_sw', coord: [3, 0]},
        {name: 'spr_pipe_x', coord: [0, 1]},
        {name: 'spr_pipe_se', coord: [1, 1]},
        {name: 'spr_pipe_nw', coord: [2, 1]},
        {name: 'spr_spigot_n', coord: [0, 2]},
        {name: 'spr_spigot_e', coord: [1, 2]},
        {name: 'spr_spigot_s', coord: [2, 2]},
        {name: 'spr_spigot_w', coord: [3, 2]}
    ],



    getRandomTileInfo: function () {
        'use strict';
        var i;

        i = Math.ceil(Math.random() * this.tileInfo.length) - 1;
        return this.tileInfo[i];
    },

    getRandomPipeTileInfo: function () {
        'use strict';
        var i;

        i = Math.ceil(Math.random() * this.numPipeTiles) - 1;
        return this.tileInfo[i];
    },

    getRandomSpigotTileInfo: function () {
        'use strict';
        var i;

        i = Math.ceil(Math.random() * this.numSpigotTiles) - 1;
        return this.tileInfo[i+this.numPipeTiles];
    },

    totalWidth: function () {
        'use strict';
        return (3 * this.boardMargin) + ((this.boardCols + 1) * this.tileSize);
    },

    totalHeight: function () {
        'use strict';
        return (2 * this.boardMargin) + (this.boardRows * this.tileSize);
    },

    board: [],

    placeTile: function (tile, loc) {
        'use strict';
        this.board[loc.col][loc.row] = tile;
        tile.attr({
            x: this.colToX(loc.col),
            y: this.rowToY(loc.row)
        });


    },

    randomLoc: function() {
        'use strict';
        var col,
            row,
            loc;

        col = Math.ceil(Math.random() * this.boardCols) - 1;
        row = Math.ceil(Math.random() * this.boardRows) - 1;

        loc = {
            col: col,
            row: row
        };

        return loc;
    },

    locAtEdge: function(loc) {
        'use strict';
        if (loc.col === 0 ||
            loc.col === this.boardCols - 1 ||
            loc.row === 0 ||
            loc.row === this.boardRows - 1) return true;
        else return false;
    },

    moveLocAwayFromEdge: function(loc) {
        'use strict';

        if (loc.col === 0) loc.col++;
        else if (loc.col === this.boardCols - 1) loc.col--;

        if (loc.row === 0) loc.row++;
        else if (loc.row === this.boardRows - 1) loc.row--;

        return loc;
    },

    locToCoord: function (loc) {
        'use strict';

        var coord = {x: 0, y: 0};

        coord.x = this.colToX(loc.col);
        coord.y = this.rowToY(loc.row);

        return coord;
    },

    coordToLoc: function (coord) {
        'use strict';

        var loc = {col: 0, row: 0};

        loc.col = this.xToCol(coord.x);
        loc.row = this.yToRow(coord.y);

        return loc;
    },

    xToCol: function(xcoord) {
        'use strict';

        return Math.floor((xcoord - Game.boardMargin) / Game.tileSize);
    },

    yToRow: function(ycoord) {
        'use strict';
        return Math.floor((ycoord - Game.boardMargin) / Game.tileSize);
    },

    colToX: function(col) {
        'use strict';
        return (col * Game.tileSize) + Game.boardMargin;
    },

    rowToY: function(row) {
        'use strict';
        return (row * Game.tileSize) + Game.boardMargin;
    },

    init: function() {
        'use strict';
        var col, row;

        for(col = 0; col < this.boardCols; col ++) {
            this.board[col] = new Array(this.boardRows);
            for (row = 0; row < this.boardRows; row ++) {
                this.board[col][row] = null;
            }
        }
    },

    width: function () {
        'use strict';
        return this.boardCols * this.tileSize;
    },

    height: function () {
        'use strict';
        return this.boardRows * this.tileSize;
    },

    start: function (divid) {
        'use strict';
        var div = document.getElementById(divid);
        Crafty.init(Game.totalWidth(), Game.totalHeight(), div);
        Crafty.background('rgb(80, 180, 200)');
        Crafty.scene('Loading');
    },

    text_css: {
        'font-size': '30px',
        'font-family': 'Arial',
        'color': 'black',
        'text-align': 'center'
    }
};
