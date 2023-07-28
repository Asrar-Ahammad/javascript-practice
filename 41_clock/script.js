let time = document.querySelector('.time');
console.log(time)

let timeChange = function () {
    const currentDate = new Date();
    const currentHours = currentDate.getHours();
    const currentMinutes = currentDate.getMinutes();
    const currentSeconds = currentDate.getSeconds();
    const formattedTime = `${currentHours}:${currentMinutes}:${currentSeconds}`;
    time.innerHTML = formattedTime;
}
const hello = setInterval(timeChange, 1000)