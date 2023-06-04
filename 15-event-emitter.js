// Event Driven Programming
// Setting up an event

const EventEmitter = require("events");

// The variable is the class
// If you want to create something custom you need to extend the Class

// Listen to event

const customEmitter = new EventEmitter();

// on - listen for an event
// emit - emit an event

// We can have multiple methods, order matters -- on() comes before emit()
// 'response' is the name of the event

customEmitter.on("response", (name, id) => {
  console.log(`data received user ${name} with id: ${id}`);
});

customEmitter.on("response", () => {
  console.log(`another data point here`);
});

// We can pass argument when we are emitting event
customEmitter.emit("response", "john", 34);

// Output: 'data received'
// Both event names or 'strings' need to match
