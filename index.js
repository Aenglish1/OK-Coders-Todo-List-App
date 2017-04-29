var restify = require('restify');
var mongoose = require('mongoose');
var server = restify.createServer();
// server.use(restify.queryParser());

const port = 8088;
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
server.post('/tasks/:arg1', tasks.create);
server.put('/tasks/:arg1', tasks.update);
// server.post('/path/:arg1/:arg2', functionCall);

server.listen(port, function() {
  console.log('%s listening on port %s', server.name, port);
});
