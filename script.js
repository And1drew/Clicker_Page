const countspan = document.getElementById("countspan");
const counter_button = document.getElementById("counter_button");
let count = 0;
let passiveIncome = 0;
let activeClicks = 1;

counter_button.onclick = function() {
    count = count + activeClicks;
    countspan.innerHTML=count;             
}

function autoClicker (increment, cost) {
    passiveIncome = passiveIncome + increment;
    if (cost > count){return}
    else {
        count = count - cost;
        countspan.innerHTML=count;   
    }
}

function activeClicker (increment, cost) {
    activeClicks = activeClicks + increment;
    if (cost > count){return}
    else {
        count = count - cost;
        countspan.innerHTML=count;   
    }
}

setInterval(() => {
    count = count + passiveIncome;
    countspan.innerHTML=count;   
}, 1000);

// document.addEventListener("click", function (event) {
//     console.log(event.target)
// });
