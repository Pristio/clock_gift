ready(function () {
    setInterval(function (){
        updateClock();
    }, 10);

    function updateClock(){
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();
        const milliseconds = date.getMilliseconds();

        const hourPosition = -74.75 * hour + ((-(74.75/60) * minute) -(74.75/60/60) * seconds) + (-(74.75/60/60/ 1000) * milliseconds);
        const minutePosition = -70 * minute + (-(70/60) * seconds) + (-(70/60/ 1000) * milliseconds);
        const millisecondsPosition = (-75 * seconds) + (-(75 / 1000) * milliseconds);
        document.querySelector(".bande1 span").style.marginLeft = hourPosition + "px";
        document.querySelector(".bande3 span").style.marginLeft = minutePosition + "px";
        document.querySelector(".bande2 span").style.marginLeft = millisecondsPosition + "px";
    }
});


function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}