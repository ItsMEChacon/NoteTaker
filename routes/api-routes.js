const express = require('express');
const {nanoid} = require ('nanoid');
const app = express.Router();
const fs = require('fs');
const path = require('path');
const jsonPath = path.join(__dirname, '..', 'db', 'db.json');

const Notes = () => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonPath, 'utf8', (err, data) => {
            if (err) {
                reject(jsonData);
            } else {
                resolve(JSON.parse(data));
            }
        });
    });
}

function addNote(data) {
    return new Promise((resolve, reject) => {
        fs.writeFile(jsonPath, JSON.stringify(data), 'utf-8', (err) => {
            if (err) {
                reject(err)
            } else {
                resolve(true);
            }
        });
    })
}

app.get('/api/notes', (req, res) => {
    Notes()
        .then(notes => res.json(notes))
        .catch((err) => res.status(500).json({
            error: err
        }));
});

module.exports = app