import mongoose from "mongoose";
import User from "./user.js";

let transactionSchema = new mongoose.Schema(
    {
        userid:{
            type:mongoose.Types.ObjectId,
            ref:User
        },
        amount:{
            type:Number
        },
        balance:{
            type:Number
        },
        dateandtime:{
            type:Date,
            default:Date.now
        },
        action:{
            type:String
        }
    }

)

let Transaction = mongoose.model('transaction',transactionSchema)
export default Transaction