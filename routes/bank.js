import express from 'express'
import User from '../models/user.js'

const router = express.Router()

router.get('/user', async(req,res)=>{
    try{

    let response = await User.find({usertype:'person'})
    console.log(response)
    res.json(response)
            
    }
    catch(e){

    }

})

router.get('/userdetails/:id', async(req,res)=>{
    try{
    let id = req.params.id
    let response = await User.findById(id)
    console.log(response)
    res.json(response)
    }
    catch(e){
        console.log(e)
    }
})

router.put('/userdetails/:id',async (req,res)=>{
    try{
        let id = req.params.id
        console.log(req.body,'jhvg');
        let response=await User.findByIdAndUpdate(id,req.body)
        console.log(response)
        res.json(response)

    }
    catch(e){

    }
})

router.put('/userdetails2/:id',async (req,res)=>{
    try{
        let id = req.params.id
        console.log(req.body,'jhvg');
        let response=await User.findByIdAndUpdate(id,req.body)
        console.log(response)
        res.json(response)
    }
    catch(e){

    }
})

export default router

