//  app/models/device.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var DeviceSchema = new Schema({
	name : String
});

module.exports = mongoose.model('Device', DeviceSchema);
