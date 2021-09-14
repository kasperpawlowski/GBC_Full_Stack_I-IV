const gretter = (myArray, counter) => {
    let greetText = 'Hello ';

    myArray.forEach(element => {
        console.log(`${greetText}${element}`);
    });
}

gretter(['Randy Savage', 'Ric Flair', 'Hulk Hogan'], 3);