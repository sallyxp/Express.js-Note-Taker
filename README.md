# Express.js-Note-Taker
This project is to  modify starter code to create an application called Note Taker that can be used to write and save notes. This application uses an Express.js back end and will save and retrieve note data to and from a JSON file.

The task is to modify starter code to create an application called 'Note Taker' that can be used to write and save notes.  This application uses an Express.js back end and saves and retrieves notes from a JSON file.

The application front end had already been created.  The task was to build a back end, connect front and back and then deploy the entire application to Heroku.

## The User Story

AS A small business owner

I WANT to be able to write and save notes

SO THAT I can organize my thoughts and keep track of tasks I need to complete

## Getting Started

The application should have a `db.json` file on the back end that will be used to store and retrieve notes using the `fs` module.

The following HTML routes should be created:

* `GET /notes` should return the `notes.html` file.

* `GET *` should return the `index.html` file.

The following API routes should be created:

* `GET /api/notes` should read the `db.json` file and return all saved notes as JSON.

* `POST /api/notes` should receive a new note to save on the request body, add it to the `db.json` file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into `npm` packages that could do this for you).


## *Table of Contents*
- [Description](#description)
- [Installation](#installation)
- [Possible Error in Code](#Possible)
- [Usage](#usage)
- [Credits](#Credits) 
- [Contributing](#contributing)
- [Authors](#authors)
- [Contact Me](#contact-me)

## *Description* 
Creation of a back end application to fit into a given front end and fulfil the functionality as given in the Acceptance Criteria:

GIVEN a note-taking application

WHEN I open the Note Taker

THEN I am presented with a landing page with a link to a notes page
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column, plus empty fields to enter a new note title and the note’s text in the right-hand column

WHEN I enter a new note title and the note’s text

THEN a Save icon appears in the navigation at the top of the page

WHEN I click on the Save icon

THEN the new note I have entered is saved and appears in the left-hand column with the other existing notes

WHEN I click on an existing note in the l
ist in the left-hand column
THEN that note appears in the right-hand column

WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in the right-hand column

## The Given Layout of Landing Page
![alt text](/Images/GivenLayout.png) 

This application uses an npm package, Express, for the creation and storage of notes to a JSON file.

A note is saved by clicking on the Disk image at the top right hand corner of the application screen. The saved notes are stored on the right side of the screen as illustrated:

Screen with saved records:
![alt text](/Images/WorkingLayout.png) 

Clicking on any saved notes will recall the note back to the centre of the screen. This note may be deleted by pressing the dustbin to the right of the record. 

Each note has a unique ID generated using when the note is created which is then can be for easy deletion of that specific note.

This has been done by use of the Uniqid package which creates unique ids based on the current time, process and machine name.

## *Possible* Error in Front end code
Note - the task was to build the back end of the application.  The front end was provided supposedly faultless and fully functioning.  However, after a record was saved, the pen icon would not work unless the readonly attributes on the note title and note text were amended.

This attribute removal has been inserted as a suggestion.  However should this have occurred in the typical work place, naturally it would have been queried at the time of writing.

## Proposed code change within handleNewNoteView method in index.js
const handleNewNoteView = (e) => {

  *noteTitle.removeAttribute('readonly', true);*

  *noteText.removeAttribute('readonly', true);*

  activeNote = {};

  renderActiveNote();

};

## *Installation*
There are two choices:

All files should be cloned to a location retaining the file structure.  All dependencies are listed within package.json.  The user can run the program using a server application (eg a Visual Studio terminal or Git bash) and first installing the npm packages by typing 'npm install' and then 'node server.js' on the commandline.  

Alternatively this application has been uploaded to Heroku.  This means that the user can just run the application by opening it in their default browser or by clicking on the following link:

https://git.heroku.com/srnotetaker.git

## *Usage* 
To create a functional note taker by providing supporting back end functionality.

## *Credits*
- [License badges](https://shields.io/)
- [Node.js](https://nodejs.org/en/download/)
- [uniqid npm](https://www.npmjs.com/package/uniqid)
- [express npm](https://www.npmjs.com/package/express)

## *Technologies Used*
The code was written using JavaScript in a node environment using npm packages express and uniqid with records stored to a JSON file.  The application was deployed to Heroku.

## *Contributing and Questions*
For any suggestions or questions, please feel free to contact me via my Github page. (github.com/sallyxp)

## *Authors*
Sally Rodgers

## *Contact Me*
- Github: **[sallyxp](github.com/sallyxp)
- LinkedIn: **[Sally Rodgers](www.linkedin.com/in/sallyhello1)  
- Email: **[sallyhello1@yahoo.com](mailto:sallyhello1@yahoo.com)

This project is MIT licensed. ![license](https://img.shields.io/static/v1?label=license&message=MIT&color=blueviolet) 
&copy; 2021 Sally Rodgers







