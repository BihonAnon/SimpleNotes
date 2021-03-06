const express = require('express');
const path = require('path');
const fs = require('fs');
const util = require('util');
const apiRoutes = require('./api/notes')
// Helper Method for generating unique Ids
// const uuid = require('./assets/js/uuid');
const PORT = process.env.PORT || 3001;

const app = express();

// Middleware for parsing JSON anherd urlencoded form data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(express.static('public'));


// GET Route for homepage
app.get('/', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/index.html'))
);

// GET Route for notes page
app.get('/notes', (req, res) =>
  res.sendFile(path.join(__dirname, '/public/pages/notes.html'))
);
app.use('/api', apiRoutes);
app.listen(PORT, () =>
  console.log(`App listening at http://localhost:${PORT}`)
)
//API for /api/notes
/**
 * Gets the API
 * Returns the Notes
 */