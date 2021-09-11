function greaterThanSize() {
    var size = Math.floor(100*Math.random());
    var counter = 0;

    while(counter < size) {
        counter++;
        console.log("The current size is " + size + " and count is " + counter);
    }
}

greaterThanSize();