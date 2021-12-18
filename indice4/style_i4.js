ready(function () {
    setInterval(function (){
        const date = new Date();
        const hour = date.getHours();
        const minute = date.getMinutes();
        const seconds = date.getSeconds();

        updateClock("hour", hour.toString(2));
        updateClock("minute", minute.toString(2));
        updateClock("second", seconds.toString(2));
    }, 1000);
});

function updateClock(type, number){
    switch (type){
        case "hour":
            number = test(number, 4);
            number = number.split("");
            document.querySelectorAll("#hour .point").forEach(function (element, key){
                if (number[key] === "0"){
                    element.classList.remove("active");
                }else{
                    element.classList.add("active");
                }
            })
            break;
        case "minute":
            number = test(number, 6);
            number = number.split("");
            document.querySelectorAll("#minutes .point").forEach(function (element, key){
                if (number[key] === "0"){
                    element.classList.remove("active");
                }else{
                    element.classList.add("active");
                }
            })
            break;
        case "second":
            number = test(number, 6);
            number = number.split("");
            document.querySelectorAll("#secondes .point").forEach(function (element, key){
                if (number[key] === "0"){
                    element.classList.remove("active");
                }else{
                    element.classList.add("active");
                }
            })
            break;
    }
}

function test (str, number) {
    while (str.length < number){
        str = "0"+str;
    }
    return str;
}

function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}