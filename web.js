var express = require('express');
var app = express();
app.use(express.logger());

app.get('/', function(request, response) {
    var content;
    var fs = require('fs'); 
    content = fs.readFileSync('./index.html', "utf8");
    response.send(content);
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
