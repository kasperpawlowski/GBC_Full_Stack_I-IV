const say = require("say");

const sorryDave = () => {
    say.speak("I'm sorry, Dave");
}

say.speak('Hello!');

say.stop();

say.speak("Hello?", "Alex", 0.5);

setTimeout(sorryDave, 5000);