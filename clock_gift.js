let links_indices = [
    "2021_12_16-gh6n483y2.html",
    "2021_12_17_a1l5b3o13.html",
    "2021_12_18_nf2phzpit.html",
    "2021_12_19_sf2ioi7jy.html",
    "2021_12_22_123456789.html"
];

const indexUrl = document.location.toString().split("/")[document.location.toString().split("/").length-1];
const indexAvant = indexUrl-1;
const indexApres = indexUrl+1;

let left_hist = document.createElement("div");
left_hist.style.position = "fixed";
left_hist.style.width = "25vw";
left_hist.style.height = "100vh";
left_hist.style.top = "0";
left_hist.style.left = "0";
left_hist.addEventListener("click", function (){
    if(typeof links_indices[indexAvant] !== "undefined") {
        document.location.href = "../indice" + (indexAvant + 1) + "/" + links_indices[indexAvant];
    }
})
document.body.appendChild(left_hist);

let right_hist = document.createElement("div");
right_hist.style.position = "fixed";
right_hist.style.width = "25vw";
right_hist.style.height = "100vh";
right_hist.style.top = "0";
right_hist.style.right = "0";
right_hist.addEventListener("click", function (){
    if(typeof links_indices[indexApres] !== "undefined") {
        document.location.href = "../indice" + (indexApres + 1) + "/" + links_indices[indexApres];
    }
})
document.body.appendChild(right_hist);