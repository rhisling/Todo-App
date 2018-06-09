console.log("starting notes.js");

const fs = require("fs");

fetchNotes = () => {
  try {
    var notesString = fs.readFileSync("notes-data.json");
    return JSON.parse(notesString);
  } catch (error) {
    return [];
  }
};

saveNotes = notes => {
  fs.writeFileSync("notes-data.json", JSON.stringify(notes));
};

var addNote = (title, body) => {
  var notes = fetchNotes();
  var note = {
    title,
    body
  };

  var findDuplicate = notes.filter(note => note.title === title);

  if (findDuplicate.length === 0) {
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log("Getting all notes");
  return fetchNotes();
};

var getNote = title => {
  console.log("Getting notes", title);
  notes = fetchNotes();
  filteredNotes = notes.filter(note => note.title === title);
  if (filteredNotes.length > 0) {
    return filteredNotes[0];
  } else {
    return {};
  }
};

var removeNote = title => {
  var notes = fetchNotes();
  var filteredNotes = notes.filter(note => note.title !== title);
  saveNotes(filteredNotes);
  return notes.length !== filteredNotes.length;
};

var displayNote = note => {
  debugger;
  console.log("--");
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  displayNote
};
