const mongoose = require('mongoose');
const UserSchema = new mongoose.Schema({
    userName: {
        type: String,
        required: true,
        maxlength: 45,
        trim:true
    },
    _id: {
        type: String,
        required: true,
        maxlength: 45,
        validate:function (value) {return value.length==12 && Number(value);},
        trim:true
    },
    address: {
        type: String,
        required: true,
        maxlength: 100,
        trim:true
    },
    contact: {
        type: String,
        required: true,
        maxlength: 10,
        validate:function (value) {return value.length==10 && Number(value);},
        trim:true
    },
    email: {
        type: String,
        required: true,
        maxlength:100,
        trim:true,
        unique:true
    },
    accountType: {
        type: String,
        required: true,
        enum:{values:['admin','not-admin']},
        trim:true
    },
    password: {
        type: String,
        required: true,
        trim:true
    },
});
module.exports = mongoose.model("user", UserSchema);