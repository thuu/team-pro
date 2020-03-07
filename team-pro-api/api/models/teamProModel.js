'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var EventSchema = new Schema({
    title: {
        type: String,
        required: 'Enter the event title'
    },
    date: {
        type: String,
        required: 'Enter the event date'
    },
    start: {
        type: String,
        required: 'Enter the event start time'
    },
    end: {
        type: String,
        required: 'Enter the event end time'
    },
    place: {
        type: String,
        required: 'Enter the event place'
    }
});

module.exports = mongoose.model('Events', EventSchema);
