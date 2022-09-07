const fs = require('fs');
const chalk = require('chalk');

const addNote = function (title, body) {
    const notes = loadNotes();

    const duplicateNote = notes.find((note) => note.title === title)
    if (duplicateNote === undefined) {
        notes.push({
            title: title,
            body: body
        });
        saveNotes(notes);
        console.log(chalk.bold.green('Note added successfully'));
    } else {
        console.log(chalk.bold.red('Duplicate Note Title'));
    }

}

const removeNote = (title) => {
    const notes = loadNotes();
    const removeNotes = notes.filter((note) => {return note.title !== title;})
   
    if (notes.length > removeNotes.length) {
        console.log(chalk.bold.green.inverse('Note removed'));
    } else {
        console.log(chalk.bold.red.inverse('Note to be removed does not exist'));
    }
    saveNotes(removeNotes);
   
};

const listNotes = () => {
    const notes = loadNotes();
    console.log(chalk.bold.green('Listing Notes:'));
    notes.forEach((note) => {
        console.log(`${note.title}: ${note.body}`);
    })
};

const readNote = (title) => {
    const notes = loadNotes();
    searchNote = notes.find((note) => note.title === title);
    if (searchNote) {
        console.log(`${chalk.bold.inverse(searchNote.title)}: ${searchNote.body}`);
    } else if (searchNote === undefined) {
        console.log(chalk.bold.red('Error: Note not found'));
    }
}

const saveNotes = (notes) => {
    const data = JSON.stringify(notes);
    fs.writeFileSync('notes.json', data);
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
}
module.exports = {
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes,
    readNote: readNote,
};