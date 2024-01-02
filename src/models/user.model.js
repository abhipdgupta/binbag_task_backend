const mongoose =require('mongoose')

const userSchema=new mongoose.Schema({
    username:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['employee','admin'],
        default:'employee'
    }
},{timestamps:true})



const USER=mongoose.model('USER',userSchema)

module.exports={USER}