import express, { response } from 'express'
import User from "../models/user.js";
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'


const router=express()

let verifyToken=(req,res,next)=>{
    try{
        console.log(req.headers.authorization)
        let response=jwt.verify(req.headers.authorization,'dsd')
        console.log(response)
        next()     
    }
    catch(e){
        res.status(401).json(e.message)
    }
}

// router.post('/login',async (req,res)=>{
//     console.log(req.body);
//     const{email,password}=req.body
//     let user=await User.findOne({email:email,password:password})
//     if(!user){
//         return res.status(402).json('invalid username or password')
//     }
//     console.log(user);
//     res.json(user)
// })



router.post('/login',async (req,res)=>{
    try{
    console.log(req.body);
    const{email,password}=req.body
    let user=await User.findOne({email:email})
    if(!user){
        return res.status(402).json('invalid username or password')
    }
    let matchPassword=await bcrypt.compare(password,user.password)
    console.log(user);
    if(!matchPassword){
        console.log('jy');
        return res.status(402).json('invalid username or password')
    }
    let token=jwt.sign({id:user._id,name:user.name},'dsd')
    console.log(token,'token generate')
    res.json({user,token})
   }
   catch(e){
    console.log(e);
    res.json(e)
   }
})

router.get('/view/:id',verifyToken,async(req,res)=>{
    let id = req.params.id
    let users=await User.findById(id)
    console.log(users);
    res.json(users)
})

export default router


