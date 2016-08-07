var express = require('express');
var app = express();

// app.use(express.static('public'));

app.get('/', function (req, res) {
    console.log('GET');
    console.log(''+__dirname);
    res.send('Test!');
});

app.listen(3000, function () {
    console.log('My example');
});
