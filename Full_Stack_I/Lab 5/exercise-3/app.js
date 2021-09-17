const events = require('events');
const eventEmitter = new events.EventEmitter();

const alarmHandler = () => {
    console.log('Alarm has been triggered!');
    eventEmitter.emit('call911');
}

const call911Handler = () => {
    console.log('Call 911!');
}

eventEmitter
    .on('alarm' , alarmHandler)
    .on('call911', call911Handler);

eventEmitter.emit('alarm');
