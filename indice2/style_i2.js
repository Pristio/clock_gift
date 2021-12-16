ready(function () {
    let date = new Date();
    let hour = (date.getHours() < 10?"0":"")+date.getHours();
    let minute = (date.getMinutes() < 10?"0":"")+date.getMinutes();
    let seconds = (date.getSeconds() < 10?"0":"")+date.getSeconds();

    document.querySelector(".left > p").textContent = hour+"";
    document.querySelector(".front > p").textContent = minute+"";
    document.querySelector(".top > p").textContent = seconds+"";

    setInterval(function (){
        date = new Date();
        hour = (date.getHours() < 10?"0":"")+date.getHours();
        minute = (date.getMinutes() < 10?"0":"")+date.getMinutes();
        seconds = (date.getSeconds() < 10?"0":"")+date.getSeconds();

        document.querySelector(".left > p").textContent = hour+"";
        document.querySelector(".front > p").textContent = minute+"";
        document.querySelector(".top > p").textContent = seconds+"";
    }, 250);
});


function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}