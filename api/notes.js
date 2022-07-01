const tips = require('express').Router();
const { json } = require('express');
const { v4: uuidv4 } = require('uuid');
const { fromString } = require('uuidv4');
const {
  readFromFile,
  writeToFile,
  readAndAppend,
} = require('./helper.js')

// GET Route for retrieving all the tips
tips.get('/notes', (req, res) => {
  readFromFile('db/db.json').then((data) => res.json(JSON.parse(data)));
});

// // GET Route for a specific tip
// tips.get('/api/notes', (req, res) => {
//   const tipId = req.params.tip_id;
//   r('../db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       const result = json.filter((tip) => tip.tip_id === tipId);
//       return result.length > 0
//         ? res.json(result)
//         : res.json('No note with that ID');
//     });
// });

// DELETE Route for a specific tip
// tips.delete(`/api/notes/:id`, (req, res) => {
//   const tipId = req.params.tip_id;
//   deleteNote('../db/db.json')
//     .then((data) => JSON.parse(data))
//     .then((json) => {
//       // Make a new array of all tips except the one with the ID provided in the URL
//       const result = json.filter((tip) => tip.tip_id !== tipId);

//       // Save that array to the filesystem
//       saveNote('../db/db.json', result);

//       // Respond to the DELETE request
//       res.json(`Note ${tipId} has been deleted 🗑️`);
//     });
// });

// POST Route for a new note
tips.post('/notes', (req, res) => {
  console.log(req.body);
  console.log("post route for new Note")

  const { title, text } = req.body;

  if (req.body) {
    const newTip = { // creates a new note with << that design
      title,
      text,
      tip_id: uuidv4(),
    };
    readFromFile('db/db.json').then(data => {
      const savedInfo = JSON.parse(data); // parse db.json
      console.log(newTip);
      savedInfo.push(newTip); // add new tip to parsed db.json
      writeToFile('db/db.json', savedInfo); // writes new savedInfo new array to db.json
    });
    
    res.json(`Note added successfully 🚀`);
  } else {
    res.error('Error in adding Note');
  }
});

module.exports = tips;





// 11-express data persitance
/**
GIVEN a note-taking application
WHEN I open the Note Taker
THEN I am presented with a landing page with a link to a notes page
>> GIVEN -- DONE
WHEN I click on the link to the notes page
THEN I am presented with a page with existing notes listed in the left-hand column,
  plus empty fields to enter a new note title and the note’s text in the right-hand 
  column
>> NVM START HERE
WHEN I enter a new note title and the note’s text
THEN a Save icon appears in the navigation at the top of the page
>>
WHEN I click on the Save icon
THEN the new note I have entered is saved and appears in the left-hand column with the
  other existing notes
WHEN I click on an existing note in the list in the left-hand column
THEN that note appears in the right-hand column
WHEN I click on the Write icon in the navigation at the top of the page
THEN I am presented with empty fields to enter a new note title and the note’s text in
  the right-hand column
 */
// fb.get(

// )
// readFromFile('./').then((data) => resizeBy.json(JSON.parse(data)))

// tips.post('/',(req, res) => {

// })