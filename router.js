// var router = require('express').Router();
var multer  = require('multer');
var upload = multer({ dest: './uploads/' });

var register = function ( router ) {
    router.get('/', function (req, res) {
        res.send('api root..');
    });

    // router.post('/upload', function (req, res) {
    //     console.log('body : ', JSON.stringify(req.file));
    //     res.send('uploaded ..');
    // });
    
    // router.post('/upload', upload.single('avatar'), function (req, res, next) {
    //     console.log('body : ', JSON.stringify(req.file));
    //     res.send('uploaded ..');
    // });
}

module.exports.register = register;