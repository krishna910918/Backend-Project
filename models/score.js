const mongoose = require('mongoose');

const scoreSchema = mongoose.Schema({

    studentName : {
        type : String,
        required : true
    },

    studentId : {
        type : String,
        requied : true
    },

    subject : {
        type : String,
        required : true
    },

    dateOfExam : {
        type : Date,
        default : new Date()
    },

    dateOfScorecard : {
        type : Date,
        default : new Date()
    },

    score : {
        type : Number,
        reuired : true
    },

    Comments : {
        type : String,
        default : ""
    }



});

module.exports = mongoose.model('Score',scoreSchema);