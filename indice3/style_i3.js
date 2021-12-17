ready(function () {
    setInterval(function (){
        const date = new Date();
        const hour = (date.getHours() < 10?"0":"")+date.getHours();
        const minute = (date.getMinutes() < 10?"0":"")+date.getMinutes();
        const seconds = (date.getSeconds() < 10?"0":"")+date.getSeconds();

        updateClock("hour", hour);
        updateClock("minute", minute);
        updateClock("second", seconds);
        updateNumber("number3", ":");
        updateNumber("number6", ":");
    }, 1000);
});

function updateClock(type, number){
    number = number.split("")
    switch (type){
        case "hour":
            updateNumber("number1", number[0]);
            updateNumber("number2", number[1]);
            break;
        case "minute":
            updateNumber("number4", number[0]);
            updateNumber("number5", number[1]);
            break;
        case "second":
            updateNumber("number7", number[0]);
            updateNumber("number8", number[1]);
            break;
    }
}

function updateNumber(numero, number){
    let listCircle = [
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
        [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
    ]

    switch (number){
        case "0":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [2, 3], [0, 2],
                [0, 2], [0, 2], [-1, -1], [0, 2], [0, 2],
                [0, 2], [0, 2], [-1, -1], [0, 2], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "1":
            listCircle = [
                [-1, -1], [-1, -1], [1, 2], [1, 3], [2, 3],
                [-1, -1], [-1, -1], [0, 1], [2, 3], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 1], [0, 3],
            ]
            break;
        case "2":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 1], [1, 3], [1, 3], [2, 3], [0, 2],
                [1, 2], [1, 3], [1, 3], [0,3], [0, 2],
                [0, 2], [1, 2], [1, 3], [1, 3], [0, 3],
                [0, 2], [0, 1], [1, 3], [1, 3], [2, 3],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "3":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 1], [1, 3], [1, 3], [2, 3], [0, 2],
                [-1, -1], [1, 2], [1, 3], [0, 3], [0, 2],
                [-1, -1], [0, 1], [1, 3], [2, 3], [0, 2],
                [1, 2], [1, 3], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "4":
            listCircle = [
                [1, 2], [2, 3], [-1, -1], [1, 2], [2, 3],
                [0, 2], [0, 2], [-1, -1], [0, 2], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [2, 3], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 1], [0, 3],
            ]
            break;
        case "5":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [1, 3], [0, 3],
                [0, 2], [0, 1], [1, 3], [1, 3], [2, 3],
                [0, 1], [1, 3], [1, 3], [2, 3], [0, 2],
                [1, 2], [1, 3], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "6":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [1, 3], [0, 3],
                [0, 2], [0, 1], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [2, 3], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "7":
            listCircle = [
                [-1, -1], [1, 2], [1, 3], [1, 3], [2, 3],
                [-1, -1], [0, 1], [1, 3], [2, 3], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 2], [0, 2],
                [-1, -1], [-1, -1], [-1, -1], [0, 1], [0, 3],
            ]
            break;
        case "8":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [2, 3], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 2], [1, 2], [1, 3], [2, 3], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case "9":
            listCircle = [
                [1, 2], [1, 3], [1, 3], [1, 3], [2, 3],
                [0, 2], [1, 2], [1, 3], [2, 3], [0, 2],
                [0, 2], [0, 1], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [2, 3], [0, 2],
                [1, 2], [1, 3], [1, 3], [0, 3], [0, 2],
                [0, 1], [1, 3], [1, 3], [1, 3], [0, 3],
            ]
            break;
        case ":":
            listCircle = [
                [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
                [-1, -1], [1, 2], [1, 3], [2, 3], [-1, -1],
                [-1, -1], [0, 1], [1, 3], [0, 3], [-1, -1],
                [-1, -1], [1, 2], [1, 3], [2, 3], [-1, -1],
                [-1, -1], [0, 1], [1, 3], [0, 3], [-1, -1],
                [-1, -1], [-1, -1], [-1, -1], [-1, -1], [-1, -1],
            ]
            break;
    }

    document.querySelectorAll("#"+numero+" .clock_circle").forEach(function (element, key){
        const circleValue = listCircle[key];
        const heure = element.getElementsByClassName("heure")[0];
        const minute = element.getElementsByClassName("minute")[0];
        if(circleValue[0] === -1){
            heure.classList.remove("active")
            heure.style.transform = "rotate(45deg)"
        }else{
            heure.style.transform = "rotate("+(circleValue[0]*90)+"deg)"
            minute.style.transform = "rotate("+(circleValue[1]*90)+"deg)"
            heure.classList.add("active")
        }
        if(circleValue[1] === -1){
            minute.style.transform = "rotate(45deg)"
            minute.classList.remove("active")
        }else{
            minute.style.transform = "rotate("+(circleValue[1]*90)+"deg)"
            minute.classList.add("active")
        }
    })
}


function ready(fn) {
    if (document.readyState !== 'loading'){
        fn();
    } else {
        document.addEventListener('DOMContentLoaded', fn);
    }
}