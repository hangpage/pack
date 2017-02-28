
var sub = require('./sub');
var $ = require('jquery');
var moment = require('moment');
require('./main.css');
var app  = document.createElement('div');
app.innerHTML = '<h1>Hello World</h1>';
app.appendChild(sub());
$('body').append(app);
$('body').append('<p>look at me! now is ' + moment().format() + '</p>');
