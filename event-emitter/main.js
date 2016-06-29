var events = require('events');
var eventEmitter = new events.EventEmitter();

// listener #1
var listener1 = function listener() {
  console.log('listener1 executed.');
}

// listener #2
var listener2 = function listener2() {
  console.log('listener2 executed.');
}

// bind the connection event with the listener1 function
eventEmitter.addListener('connection', listener1);

// bind the connection event with the listener2 function
eventEmitter.on('connection', listener2);

var eventListener = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event");

// fire the connection event
eventEmitter.emit('connection');

// remove the binding of listener1 function
eventEmitter.removeListener('connection', listener1);
console.log("Listener1 will not listen now.");

// fire the connection event
eventEmitter.emit('connection');

eventListener = require('events').EventEmitter.listenerCount(eventEmitter, 'connection');
console.log(eventListener + " Listener(s) listening to connection event");

console.log("Program Ended.")
