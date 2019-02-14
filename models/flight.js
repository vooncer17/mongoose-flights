var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var flightSchema = new Schema({
    airline: String,
    flightNo: Number,
    departs: Date
})

module.exports=mongoose.model('Flight', flightSchema)