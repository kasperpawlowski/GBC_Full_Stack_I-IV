var promise1 = 101;
var promise2 = "follow the white";
var promise3 = new Promise(function(resolve, reject) {
    resolve("rabbit.. neo");
});

const promise = Promise.all([promise1, promise2, promise3]).then((data) => {
    return new Promise((resolve, reject) => {
        resolve(data);
    });
});

promise.then(data => console.log(data));