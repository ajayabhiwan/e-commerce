const mongoose = require("mongoose");

const crudSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    image:{
        type:String,
        required:true,

    },
    age:{
        type:Number,
        required:true
        
    },
    password:{
        type:String,
        required:true,
        min:4,
        max:10
    }
})

module.exports = new mongoose.model('cruddata',crudSchema);