const mongoose = require('mongoose');
const User = require('./user');

const classSchema = new mongoose.Schema({
    
    className : {
        type : String,
        required : true
    },

    teachers : {

        type: [String],
        default : []
    },

    students : {

        type : [String],
        default : []
    }

});

module.exports = mongoose.model('Class',classSchema);