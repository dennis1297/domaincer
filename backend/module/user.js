const mongoose = require("mongoose")
const Schema = mongoose.Schema

    const usermodel = Schema(
  {
    firstName : {
        type :String,
        required: true,
    },

    lastName : {
        type :String,
        required: true,
    },

    type : {
        type : String,
        enum : ["freelancer","client"],
        required: true,
    },
    
    email : {
        type : String,
        required : true,
        unique : true,
    },

    password : {
        type : String,
        required : true,
    },
        phone: {
        type : String,
        required : true,
        unique : true,
    }

}, {
    timestamps: true 
});

module.exports = mongoose.model("usermodel", usermodel, "usermodel");





