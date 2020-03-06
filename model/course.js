const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
    course:{
        type: String,
        required: true
    },
    avgSal:{
        type: Number,
        required: true
    },
    duration:{
        type: Number,
        required: true
    },
    qualifications:{
        type: Array
    }
});

module.exports = Course = mongoose.model('course', courseSchema);