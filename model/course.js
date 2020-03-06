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
    },
    description:{
        type: String,
        required: true
    },
    pros:{
        type: Array,
        required: true
    },
    cons:{
        type:Array,
        required: true
    },
    top3:{
        type:Array,
        required: true
    }
});

module.exports = Course = mongoose.model('course', courseSchema);