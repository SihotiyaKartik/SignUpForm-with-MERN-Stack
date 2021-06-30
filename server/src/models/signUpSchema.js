const mongoose = require('mongoose')
const signUP = new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    date:{
        type:Date,
        default:Date.now

    }

})
module.exports = mongoose.model('loginFormDatabase',signUP);