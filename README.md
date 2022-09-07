# NotesApp-Node.js
Program designed to allow user to add, remove, list, and read notes into a JSON file from the command line using node.js
Utilizes FileSystem, yargs, and JSON package to allow user to add, remove, list, and read notes from a JSON file. 

Command-line arguments examples:

1. node app.js add --title="Week 1" --body="Bucs vs. Cowboys"
2. node app.js remove --title="Week 1"
3. node app.js list
4. node app.js read --title="Week 1"
