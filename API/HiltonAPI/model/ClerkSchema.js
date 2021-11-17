const mongoose = require('mongoose');
const ClerkSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim:true
    },
    _id: {
        type: String,
        required: true,
        validate:function (value) {return value.length==12 && Number(value);},
        trim:true
    },
    address: {
        type: String,
        required: true,
        trim:true
    },
    contact: {
        type: String,
        required: true,
        validate:function (value) {return value.length==10 && Number(value);},
        trim:true
    },
    position: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        trim:true
    }
});
module.exports = mongoose.model("Clerk", ClerkSchema);
