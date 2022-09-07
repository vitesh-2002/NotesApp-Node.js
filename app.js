const notes = require('./notes.js');
const fs = require('fs');
const chalk = require('chalk');
const yargs = require('yargs');

//chalk module
console.log(chalk.bold.green.inverse("Success!"));
const error = chalk.red.bold;
console.log(error('Them defined using Chalk'));

//user input command line arguments
console.log(process.argv);

//yargs module
yargs.version('1.1.0');

yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.addNote(argv.title, argv.body);
    }
})

yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.removeNote(argv.title);
    }
})

yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: function () {
        notes.listNotes();
    }
})

yargs.command({
    command: 'read', 
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: function (argv) {
        notes.readNote(argv.title);
    }
})
// console.log(yargs.argv);
yargs.parse();
