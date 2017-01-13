"use strict";

let express = require('express');
let join = require('path').join;

let app = express();

app.use('/node_modules', express.static(join(__dirname, 'node_modules')));
app.use('/fonts', express.static(join(__dirname, 'fonts')));
app.use('/style', express.static(join(__dirname, 'style')));
app.use(express.static(join(__dirname, 'src')));

app.listen(3000, 'localhost', function() {
    console.log('Server is now running on: "localhost:3000"');
});