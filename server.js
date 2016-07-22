var express = require('express');
var app = express();

app.use(function(req, res, next) {
    console.log('Request for ' + req.originalUrl);

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get('/ping', function (req, res) {
    res.send(JSON.stringify({'ping':'True'}));
});

app.listen(3000, function () {
    console.log('Server listening on port 3000!');
});