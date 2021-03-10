// Dependencies
const express = require("express");
const path = require("path");
const fs = require("fs");
const { json } = require("express");
const { stringify } = require("querystring");
const uniqid = require('uniqid');     //for unique id


// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

//Routes - easier layout to ensure consistency/clarity
// '/' is the default
app.get('/', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/index.html')));
app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/notes.html')));
app.get('/api/notes', (req, res) => res.sendFile(path.join(__dirname, 'Develop/db/db.json')));
app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/assets/js/index.js')));
app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, 'Develop/public/assets/css/styles.css')));


//Saving of new note - includes the addition of new id field
app.post('/api/notes', (req, res) => {
    //adds new input to request body
    let newNote = req.body;
    newNote.id = uniqid();
    //writes new record details to console.log
    console.log(newNote);

    //gets existing inputs
    let db = require(path.join(__dirname, 'Develop/db/db.json'));
     //adds new note record to newNote array
    db.push(newNote);

    //shows current note records to console
    console.log(db);

    //stringify - converts the object to a string
    let writeFile = JSON.stringify(db, null, 2);

    //adds to db.json
    updateNotesarray(writeFile);

    //loads notes
    return res.json(db);

});

//Deletion of selected note
    app.delete('/api/notes/:id', (req, res) => {
    //selected input to request body
    const selectedNote = req.params.id;

    //logs note to be deleted
    console.log(selectedNote);

    //gets old inputs

    let db = require(path.join(__dirname, 'Develop/db/db.json'));
    
    //loop to remove the note from the array    
    for (let i = 0; i < db.length; i++) {
        if (selectedNote == db[i].id) {
            console.log(db[i]);
            db.splice(i, 1);
        }
    }

    //shows current notes to console
    console.log(db);

    //exchanges data to server
    let writeFile = JSON.stringify(db, null, 2);

    //'refreshes' array
    updateNotesarray(writeFile);
    //reloads notes
    return res.json(db);
});

//recreates the db file after adding or removing a note
//function generateNotes(notes) {
function updateNotesarray(notes) {
  fs.writeFile(path.join(__dirname, 'Develop/db/db.json'), notes, (err) =>
        err ? console.error(err) : console.log('Notes array amended successfully!'));
}

//Starts the server to begin listening
app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));
