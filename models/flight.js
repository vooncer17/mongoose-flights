var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var destinationSchema = new Schema({
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    arrival: {
        type: Date,
        default: () => Date.now() + 365 * 24 * 60 * 60000
    }
})

var flightSchema = new Schema({
    airline: {
        type: String,
        enum: ['American', 'Delta', 'Southwest']
    },
    flightNo: {
        type: Number,
        min: 1,
        max: 9999,
        required: true
    },
    departs: {
        type: Date, 
        default: () => Date.now() + 365 * 24 * 60 * 60000
    },
    airport: {
        type: String,
        enum: ['AUS', 'DAL', 'LAX', 'SEA']
    },
    destinations: [destinationSchema]
});

module.exports=mongoose.model('Flight', flightSchema)