var restify = require('restify');
var mongoose = require('mongoose');
var server = restify.createServer();

cnost port = 27017;
const dbserver = 'mongodb://localhost/todo'

var tasks = require('./routes/tasks');

mongoose.connect(dbserver);
var db = mongoose.connection;

db.on('error', function(msg) {
  console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function() {
  console.log("Mongoose connection established.");
});

server.get('/', function(req, res, next) {
  res.send("SUCCESS");
});

server.get('/tasks', tasks.read);

server.listen(port, function() {
  console.log('%s listening on %s', server.name, port);
});
