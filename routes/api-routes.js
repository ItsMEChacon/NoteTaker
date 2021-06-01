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
