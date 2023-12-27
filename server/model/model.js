
const mongoose=require('mongoose');

const Schema= new mongoose.Schema({
    fname:{
        type:String,
        required:true,
    },
    lname:{
        type:String,
        required:true,
    },
    age:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,
        min:6,
        max:50,
    },
    gendar:String,
    status:String,
    datetime: {
        type:String,
        default: Date.now,
    },
},{  
    timestamps:true,
});

const UserDB= mongoose.model('Crud',Schema);

module.exports=UserDB;