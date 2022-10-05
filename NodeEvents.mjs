import { EventEmitter } from 'node:events';

class MyEmitter extends EventEmitter { };

const myEmitter = new MyEmitter();

myEmitter.on('Its late Night!', () => {
    console.log('Go To Sleep!');
    setTimeout(() => {
        console.log('Stop Working Please Go To Sleep Now!');
    }, 2000);
});

console.log("The Script Is Running!");
myEmitter.emit('Its late Night!');
console.log("The Script Is Still Running!");