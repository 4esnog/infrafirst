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
    console.time('Render /');

    res.render('index', {
        face: getFace(),
        color: generateColor().join(', ')
    });

    console.timeEnd('Render /');
});

app.get('/color', function (req, res) {
    console.time('Render /color');

    let color = generateColor().join(', ');
    res.send(color);

    console.log('New color: ' + color);
    console.timeEnd('Render /color');
});

app.get('/face', function (req, res) {
    console.time('Render /face');

    let face = getFace();
    res.send(face);

    console.log('New face: ' + face);
    console.timeEnd('Render /face');
});

app.listen(app.get('port'), function () {
    console.log('Cool faces on port', app.get('port'));
});

module.exports = app;
