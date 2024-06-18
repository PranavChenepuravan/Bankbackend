import mongoose from "mongoose";

let userSchema = mongoose.Schema({
    name:{
        type:String
    },
    gender:{
        type:String
    },
    age:{
        type:String
    },
    dob:{
        type:String
    },
    address:{
        type:String
    },
    phone:{
        type:String,
        unique:true
    },
    email:{
        type:String,
        unique:true
    },
    password:{
        type:String
    },
    rpass:{
        type:String
    },
    usertype:{
        type:String
    },
    accno:{
        type:String,
        default:'Nothing'
    },
    balance:{
        type:Number,
        default:0
    }
})
let User=mongoose.model('user',userSchema)

export default User