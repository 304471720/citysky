var users = require('./users.js'),
    index = require('./index.js');

module.exports = function(app){

    users(app);
	index(app);
}