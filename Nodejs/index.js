const EventEmitter = require("events");
const myEventEmitter = new EventEmitter();

myEventEmitter.on("gree", () => {
  console.log("Hello ");
});

myEventEmitter.emit("gree");
