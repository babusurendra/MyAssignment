var mongoose = require('mongoose');
connectionUrl = 'mongodb://localhost:27017/interview';
mongoose.connect(connectionUrl);
let db = mongoose.connection;
db.on('error',function(){
	console.log("Error while connecting to DB");
})
db.on('success',function(){
	console.log("Yay!! DataBase connected");
})
require('../models/carModel');