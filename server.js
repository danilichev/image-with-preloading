var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var root = path.resolve('.');

app.use('/', express.static(path.join(root, 'app'), {index: 'app.html'}));

app.listen(3000);
console.log('Server listening on http://localhost:3000');