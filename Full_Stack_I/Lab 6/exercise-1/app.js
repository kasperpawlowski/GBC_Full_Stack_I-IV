let counter = 10;

const timer = setInterval(() => {
    if(counter == 0) {
        console.log("time is up!");
        clearInterval(timer);
        return;
    }
    console.log(counter);
    counter--;
}, 1000);