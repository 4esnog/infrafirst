'use strict';

const express = require('express');
const getFace = require('cool-ascii-faces');
const app = express();

app.set('port', process.env.PORT || 3000);

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

app.use(express.static(__dirname + '/public'));

app.get('/', function (req, res) {
    console.time('render');
    res.render('index', { face: getFace() });
    console.timeEnd('render');
});

app.listen(app.get('port'), function () {
    console.log('Cool faces on port', app.get('port'));
});
