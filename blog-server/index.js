var express = require("express");
var APIRouter = require("./router");

var app = express();
app.use(express.static('public'));
app.use('/api', APIRouter);

app.get('/', function (req, resp) {
  resp.redirect('/index.html');
});

app.listen(8080);

console.log("Server has started listening on port 8080");
