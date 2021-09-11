function emptyArray(myArray) {
    while(myArray.length > 0) {
        myArray.pop();
    }
    return myArray;
}

console.log(emptyArray([1,2,3]));
console.log(emptyArray(["egg","bacon","toast","coffe","random","juice"]));