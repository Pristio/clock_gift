let links_indices = [
    "2021_12_16-gh6n483y2.html",
    "2021_12_17_a1l5b3o13.html",
    "2021_12_18_nf2phzpit.html",
];

const indexUrl = links_indices.indexOf(document.location.toString().split("/").slice(4,5)[0]);
const indexAvant = indexUrl-1;
const indexApres = indexUrl+1;

let xDown = null;
let yDown = null;
document.addEventListener('touchstart', handleTouchStart, false);
document.addEventListener('touchmove', handleTouchMove, false);

function getTouches(evt) {
    return evt.touches ||             // browser API
        evt.originalEvent.touches; // jQuery
}

function handleTouchStart(evt) {
    const firstTouch = getTouches(evt)[0];
    xDown = firstTouch.clientX;
    yDown = firstTouch.clientY;
}

function handleTouchMove(evt) {
    if (!xDown || !yDown) {
        return;
    }

    let xUp = evt.touches[0].clientX;
    let yUp = evt.touches[0].clientY;

    let xDiff = xDown - xUp;
    let yDiff = yDown - yUp;

    if(Math.abs(xDiff) > Math.abs(yDiff)) {/*most significant*/
        if(xDiff > 0) {
            if(typeof links_indices[indexApres] !== "undefined") {
                document.location.href = "../indice" + (indexApres + 1) + "/" + links_indices[indexApres];
            }
        }else{
            if(typeof links_indices[indexAvant] !== "undefined") {
                document.location.href = "../indice" + (indexAvant + 1) + "/" + links_indices[indexAvant]
            }
        }
    }

    xDown = null;
    yDown = null;
}