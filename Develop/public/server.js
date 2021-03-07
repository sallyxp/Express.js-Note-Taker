var express = require("express");
var path = require("path");
var fs = require("fs");

var app = express();
//this command lets it work both local and hosted
var PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
//designates the directory/folder the server.js script as accessable as static scripts
app.use(express.static(__dirname));
app.use(express.json());

//Routes

//Basic route that gets the saved notes
app.get("/api/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "../db/db.json"));
});

//route to the "notes" page
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "notes.html"));
});

//Basic route that sends the user to the home (AJAX) page
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//set the home page as the default route
app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "index.html"));
});

//Starts the server to being listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
});