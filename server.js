const PORT=8080;
var express = require('express'),
    app = express();
var fs = require('fs'),
    path = require('path');


app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res){
    fs.readFile("public/html/index.html", function(err, data){
        res.writeHead(200, {'Content-Type':'text/html'});
        res.write(data);
        res.end();
    });
});


var server = app.listen(PORT, function(){
    console.log("Server listening on http://localhost:%s",PORT);
});