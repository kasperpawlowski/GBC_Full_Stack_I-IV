const events = require('events');

const emitter = new events.EventEmitter();
const buf = Buffer.from([0x62, 0x75, 0x66, 0x66, 0x65, 0x72]);

emitter.on('convert', (data) => {
    for(let el of buf) {
        console.log(el.toString());
    }
})

emitter.emit('convert');
