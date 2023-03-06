console.log('first');
console.log('second');
console.log('third');
let seconds = 0;
const intervalId = setInterval(() => {
    console.log(++seconds);
    if (seconds === 10) {
        clearInterval(intervalId);
    }
}, 2000)


console.log('fifth');
console.log('sixth');
