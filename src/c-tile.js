/*global Crafty*/
/*global Game*/


Crafty.c('Tile', {
    init: function () {
        "use strict";
        this.requires('2D, Canvas, Tweener');
        this.attr({
            duration: 30, // In # of frames
            easing: 'easeInOut' // Type of transition -- see: http://easings.net/
        });
    },

    slideTo: function (dest) {
        "use strict";

        this.addTween(
            {x: dest.x, y: dest.y},   // Properties
            this.easing,    // Transition
            this.duration  // Duration
            // function () {   // onComplete
            //     this.at(dest.col, dest.row);
            // }
        );
    },

});