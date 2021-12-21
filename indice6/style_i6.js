ready(function () {

    const date = new Date();
    const hour = date.getHours();
    const minute = date.getMinutes();
    const seconds = date.getSeconds();

    const rotateSeconde = seconds*360/60;
    const rotateMinute = minute*360/60
    const rotateHour = hour*360/24;

    document.querySelector(".seconds-container").style.transform = "rotateZ("+rotateSeconde+"deg)";
    document.querySelector(".minutes-container").style.transform = "rotateZ("+rotateMinute+"deg)";
    document.querySelector(".hours-container").style.transform = "rotateZ("+rotateHour+"deg)";
});

function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}