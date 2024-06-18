import express from 'express'
import User from '../models/user.js'
import Transaction from '../models/transaction.js'
import bcrypt, { hash } from 'bcrypt'
import jwt from 'jsonwebtoken'


const router=express.Router()


router.post('/register', async (req,res)=>{
    try{

        const{name,password}=req.body
        let hashedPassword=await bcrypt.hash(password,10)
        console.log(hashedPassword);

        req.body={...req.body,password:hashedPassword}

        console.log(req.body,'new body')
        let newdata=new User(req.body)
        console.log(newdata)

        let response=await newdata.save()
        console.log(response)
        res.json(response)
        
    }
    catch(e){
        res.json(e.message)
    }
})



// router.post('/register', async (req,res)=>{
//     try{
//         console.log(req.body)
//         let newUser=new User(req.body)
//         console.log(newUser, 'new User');
//         let response=await newUser.save()
//         res.json(response)
//     }
//     catch(e){
//         res.json(e.message)
//     }
// })


router.put('/tranasction:id', async (req,res)=>{
    try{
        let id = req.params.id
        console.log(req.body,'dcd')
        let response=await Transaction.findByIdAndUpdate(id,req.body)
        console.log(response)
        res.json(response)

    }
    catch(e){

    }
})

router.post('/transction', async (req,res)=>{
    try{
        console.log(req.body,'dss')
        let newTransaction=new Transaction(req.body)
        console.log(newTransaction, 'new transaction');
        let response=await newTransaction.save()
        res.json(response)
        // let response2=await User.findByIdAndUpdate(id,req.body)
    }
    catch(e){
        res.json(e.message)
    }
})

router.post('/negtransction', async (req,res)=>{
    try{
        console.log(req.body)
        let newTransaction=new Transaction(req.body)
        console.log(newTransaction, 'new transaction');
        let response=await newTransaction.save()
        res.json(response)
        // let response2=await User.findByIdAndUpdate(id,req.body)
    }
    catch(e){
        res.json(e.message)
    }
})

router.get('/transdetails/:id', async(req,res)=>{
    try{
        let id = req.params.id
        let response = await Transaction.find({userid:id})
        console.log(response)
        res.json(response)
    }
    catch(e){
        console.log(e)
    }

})


export default router

