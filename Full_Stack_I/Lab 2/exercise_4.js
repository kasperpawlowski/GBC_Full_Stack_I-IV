function helloWorlds(number) {
    if(typeof(number) === "number"){
        for(var i=0; i<number; i++) {
            console.log("Hello World");
        }
    } else {
        console.log("Goodbye World");
    }
}

helloWorlds(5);
helloWorlds(true);
helloWorlds("hello");
helloWorlds(null);
helloWorlds(undefined);