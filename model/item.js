/*
	Define the model for movies with 4 attributes
*/

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var itemSchema = new Schema({
	name: String,
	status: Number
});

module.exports = mongoose.model('Item', itemSchema);