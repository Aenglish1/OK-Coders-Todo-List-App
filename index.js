var restify = require('restify');
var mongoose = require('mongoose');
var server = restify.createServer();

cnost port = 8088;
const dbserver = 'mongodb://localhost/todo'

var tasks = require('./routes/tasks');
var client = require('./client');

mongoose.connect(dbserver);
var db = mongoose.connection;

db.on('error', function(msg) {
  console.log('Mongoose bit the dust; ' + msg);
});

db.once('open', function() {
  console.log("Mongoose connection established.");
});

server.get('/', client.get);
server.get('/tasks', tasks.read);
server.post('/tasks/:name', tasks.create);

server.listen(port, function() {
  console.log('%s listening on %s', server.name, port);
});
