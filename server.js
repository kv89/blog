var express = require("express");
var bodyParser = require('body-parser');

var app = express();
var router = express.Router();

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use(express.static(__dirname + '/client'));
app.use(bodyParser.json());

app.listen(3000, function () {
    console.log('Started on port : 3000');
});