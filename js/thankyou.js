let countdown = 5;
const countdownEl = document.getElementById("countdown");

const interval = setInterval(() => {
    countdownEl.textContent = countdown;
    countdown--;
    if(countdown < 0){
        clearInterval(interval);
        window.location.href = "index.html";
    }
}, 1000);