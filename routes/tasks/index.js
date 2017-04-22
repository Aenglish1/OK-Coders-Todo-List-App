var Tasks = require('../../models/tasks');

exports.read = function(req, res, next) {
  Tasks.find({completed: false}).exec(function(err, data) {
    if(err){res.send('Error');}
    else {res.json(data);}
  });
  return next();
}
