console.log("starting notes.js");

const fs = require("fs");

var addNote = (title, body) => {
  var notes = [];
  var note = {
    title,
    body
  };
  try {
    var notesString = fs.readFileSync("notes-data.json");
    notes = JSON.parse(notesString);
  } catch (error) {}

  var findDuplicate = notes.filter(note => note.title === title);
  console.log(findDuplicate);

  if (findDuplicate.length === 0) {
    notes.push(note);
    fs.writeFileSync("notes-data.json", JSON.stringify(notes));
  }
};

var getAll = () => {
  console.log("Getting all notes");
};

var getNote = title => {
  console.log("Getting notes", title);
};

var removeNote = title => {
  console.log("Removing notes", title);
};

module.exports = {
  addNote,
  getAll,
  getNote
};
