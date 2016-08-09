'use strict';

const express = require('express');
const getFace = require('cool-ascii-faces');
const app = express();
const generateColor = require('./src/helpers').generateColor;

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    console.time('render');

    res.render('index', {
        face: getFace(),
        color: generateColor().join(', ')
    });

    console.timeEnd('render');
});

app.get('/color', function (req, res) {
    console.time('get new color');
    res.send(generateColor().join(', '));
    console.timeEnd('get new color');
});

app.get('/face', function (req, res) {
    console.time('get new face');
    res.send(getFace());
    console.timeEnd('get new face');
});

app.listen(app.get('port'), function () {
    console.log('Cool faces on port', app.get('port'));
});

module.exports = app;
