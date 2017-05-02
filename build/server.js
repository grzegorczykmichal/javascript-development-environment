var express = require('express');
var path = require('path');
var open = require('open');

var config = {
    port: 3000,
    host: "localhost",
}

var app = express();

app.get('/', function(request, response){
    response.sendFile(path.join(__dirname + '../src/index.html'));
});

app.listen(config.port, function(error){
    if(error){
        console.error(error);
    }else{
        open('http://' + config.host + ':' + config.port);
    }
});