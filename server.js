const express = require('express');
const path = require('path');
const app = express.Router();


const server = express();
const PORT = process.env.PORT || 3000;

const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

app.use(apiRoutes);
app.use(htmlRoutes);

server.use(express.static(__dirname+'/public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());
server.use(app);

server.listen(PORT,() => console.log(`Server is running on PORT:${PORT}`));