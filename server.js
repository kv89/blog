var express = require("express");
var app = express();
var bodyParser = require('body-parser');
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });
// var api = require('./router.js');

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/client/views/index.html');
});

app.use(express.static(__dirname + '/client'));
var router = express.Router();
app.use(bodyParser.json());       // to support JSON-encoded bodies
// app.use(bodyParser.urlencoded({ extended: true }));     // to support URL-encoded bodies
// api.register(router);
// app.use('/api', router);

app.post('/api/upload', upload.single('file'), function (req, res, next) {
        console.log('body : ', JSON.stringify(req.file));
        res.send('uploaded ..');
    });

app.listen(3000, function () {
    console.log('Started on port : 3000');
});