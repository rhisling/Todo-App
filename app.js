console.log("Starting app.js");

const fs = require("fs");
const _ = require("lodash");
const yargs = require("yargs");

const notes = require("./notes.js");
const argv = yargs
  .command("add", "Add a new note", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    },
    body: {
      describe: "Body of the note",
      demand: true,
      alias: "b"
    }
  })
  .command("list", "List all nodes")
  .command("read", "read a note", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    }
  })
  .command("remove", "remove a note", {
    title: {
      describe: "Title of the note",
      demand: true,
      alias: "t"
    }
  })
  .help().argv;

var command = process.argv[2];
console.log("Command: ", command);

console.log("Yargs", argv);

if (command === "add") {
  let note = notes.addNote(argv.title, argv.body);
  if (note) {
    console.log("note created");
    notes.displayNote(note);
  } else {
    console.log("note title taken");
  }
} else if (command === "list") {
  let allNotes = notes.getAll();
  if (allNotes) {
    allNotes.forEach(note => {
      notes.displayNote(note);
    });
  } else {
    console.log("Notes have not been added");
  }
} else if (command == "read") {
  let note = notes.getNote(argv.title);
  if (Object.keys(note).length !== 0) {
    notes.displayNote(note);
  } else {
    console.log("Note not found");
  }
  console.log("Reading notes");
} else if (command == "remove") {
  if (notes.removeNote(argv.title)) {
    console.log("Note deleted");
  } else {
    console.log("The note title doesn't exist");
  }
} else {
  console.log("Command not recognized");
}
