// Dependencies
const e = require('express');
const express = require('express');
const path = require('path');
const app = express.Router();
const PORT = process.env.PORT || 3000;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


//Data


// Routes
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../index.html')));

app.get('/notes.html', (req, res) => res.sendFile(path.join(__dirname, '../notes.html')));





// Listener
app.listen(PORT, () => console.log(`Server is listening on port ${PORT}...`));