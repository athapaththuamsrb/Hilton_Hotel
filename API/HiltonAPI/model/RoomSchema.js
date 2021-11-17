const mongoose = require('mongoose');
const RoomSchema = new mongoose.Schema({
    roomNumber: {
        type: Number,
        required: true,
        max:500,
        min:100,
        trim:true,
        unique:true
    },
    isAvailable: {
        type: Boolean,
        required: true,
        trim:true
    },
    floor: {
        type: "Number",
        required: true,
        max:5,
        min:1,
        trim:true,
    },
    roomType: {
        type: String,
        required: true,
        enum:{values:["dormitoryRooms","singleRooms","doubleRooms"]}},
    customer: {
        name: {
            type: String,
            maxlength: 45,
            trim:true
        },
        nic: {
            type: String,
            maxlength: 45,
            validate:function (value) {return value.length===12 && Number(value);},
            trim:true
        },
        address: {
            type: String,
            maxlength: 100,
            trim:true
        },
        contact: {
            type: String,
            maxlength: 10,
            validate:function (value) {return value.length===10 && Number(value);},
            trim:true
        },
        email: {
            type: String,
            maxlength:100,
            trim:true,
        },
        payment: {
            type: Array,
        },
        bile:{
            type:Number,
        }
    }});
module.exports = mongoose.model("Room", RoomSchema);
