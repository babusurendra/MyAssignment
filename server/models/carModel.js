var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var carSchema = new Schema({
	'carCompany' : String,
	'carModel' : String,
	'carImageUrl' : String,
	'description':String
});

module.exports = mongoose.model('cars', carSchema);
