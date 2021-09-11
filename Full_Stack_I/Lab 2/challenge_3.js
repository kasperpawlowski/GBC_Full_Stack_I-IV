function getKeyValuePairs(object) {
    var keys   = [];
    var values = [];

    for(var key in object) {
        keys.push(key);
        values.push(object[key]);
    }
    console.log([keys, values]);
}

getKeyValuePairs({a: 5, b: 10, c: 16});
getKeyValuePairs({r: "React", a: "Angular", v: "Vue"});
getKeyValuePairs({k1: true, k2: false, k3: undefined});