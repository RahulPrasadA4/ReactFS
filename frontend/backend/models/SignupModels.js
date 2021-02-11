const mongoose = require('mongoose');

const signupTemplate = new mongoose.Schema({
    fullname:{
        type:String,
        required: true
    }


})


module.exports = mongoose.model('emptable', signupTemplate)