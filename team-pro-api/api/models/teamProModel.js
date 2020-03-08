'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
    title: {
        type: String,
        required: 'Enter the event title'
    },
    startDate: {
        type: String,
        required: 'Enter the event start date and time'
    },
    endDate: {
        type: String,
        required: 'Enter the event end date and time'
    },
    place: {
        type: String,
        required: 'Enter the event place'
    },
    forwarderCount: {
        type: Number,
        default: 0
    }
    ,
    defenderCount: {
        type: Number,
        default: 0
    }
    ,
    goalieCount: {
        type: Number,
        default: 0
    }
});

module.exports = mongoose.model('Events', EventSchema);
