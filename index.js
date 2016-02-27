var express = require('express');
var app = express();
var url = require('url');
var request = require('request');

// For JSON Parsing
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true }));

// Setting the Router at Port 9001
app.set('port', (process.env.PORT || 9001));

// To check App status
app.get('/', function(req, res) {
    res.send('Dataminator is Live yo!');
    consle.log("It's live on port:", port );
});
