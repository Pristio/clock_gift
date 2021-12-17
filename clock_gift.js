class Swipe {
    constructor(element) {
        this.xDown = null;
        this.yDown = null;
        this.element = typeof(element) === 'string' ? document.querySelector(element) : element;

        this.element.addEventListener('touchstart', function(evt) {
            this.xDown = evt.touches[0].clientX;
            this.yDown = evt.touches[0].clientY;
        }.bind(this), false);

    }

    onLeft(callback) {
        this.onLeft = callback;

        return this;
    }

    onRight(callback) {
        this.onRight = callback;

        return this;
    }

    onUp(callback) {
        this.onUp = callback;

        return this;
    }

    onDown(callback) {
        this.onDown = callback;

        return this;
    }

    handleTouchMove(evt) {
        if ( ! this.xDown || ! this.yDown ) {
            return;
        }

        var xUp = evt.touches[0].clientX;
        var yUp = evt.touches[0].clientY;

        this.xDiff = this.xDown - xUp;
        this.yDiff = this.yDown - yUp;

        if ( Math.abs( this.xDiff ) > Math.abs( this.yDiff ) ) { // Most significant.
            if ( this.xDiff > 0 ) {
                this.onLeft();
            } else {
                this.onRight();
            }
        } else {
            if ( this.yDiff > 0 ) {
                this.onUp();
            } else {
                this.onDown();
            }
        }

        // Reset values.
        this.xDown = null;
        this.yDown = null;
    }

    run() {
        this.element.addEventListener('touchmove', function(evt) {
            this.handleTouchMove(evt).bind(this);
        }.bind(this), false);
    }
}

let links_indices = [
    "2021_12_16-gh6n483y2.html",
    "2021_12_17_a1l5b3o13.html",
    "2021_12_18_nf2phzpit.html",
];

const indexUrl = links_indices.indexOf(document.location.toString().split("/").slice(4,5)[0]);
const indexAvant = indexUrl-1;
const indexApres = indexUrl+1;

// Get the element yourself.
var swiper = new Swipe(document);
swiper.onLeft(function() {
    if(typeof links_indices[indexApres] !== "undefined") {
        document.location.href = "../indice" + (indexApres + 1) + "/" + links_indices[indexApres];
    }
});
swiper.onRight(function() {
    if(typeof links_indices[indexAvant] !== "undefined") {
        document.location.href = "../indice" + (indexAvant + 1) + "/" + links_indices[indexAvant];
    }
});
swiper.run();