var express = require('express');
var path = require('path');
var serveStatic = require('serve-static');

app = express();
app.use("/", serveStatic(path.join(__dirname, '/dist')));

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/dist/index.html')
})

var port = process.env.PORT || 5000;
app.listen(port);
