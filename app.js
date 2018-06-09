console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");
const argv = yargs.argv;

var command = process.argv[2];
console.log("Command: ", command);

console.log("Yargs", argv);

if (command === "add") {
  var note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("note created");
    console.log("--");
    console.log(`Title: ${note.title}`);
    console.log(`Body: ${note.body}`);
  } else {
    console.log("note title taken");
  }
} else if (command === "list") {
  notes.getAll();
} else if (command == "read") {
  notes.getNote(argv.title);
  console.log("Reading notes");
} else if (command == "remove") {
  notes.removeNote(argv.title);
} else {
  console.log("Command not recognized");
}
