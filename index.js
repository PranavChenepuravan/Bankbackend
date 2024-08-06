import express from 'express'
import mongoose from 'mongoose'
const app=express()
import cors from 'cors'
mongoose.connect('mongodb+srv://bankapp:bHFfFdFcFCP5mZKg@cluster0.tz0jh3o.mongodb.net/prestigebank')
.then(()=> console.log('Connected !'));

import commonRouter from './routes/common.js' 
import peopleRouter from './routes/people.js'
import bankRouter from './routes/bank.js'


app.use('/uploads', express.static('uploads'))
app.use(cors())
app.use(express.json())
app.use('/',commonRouter)
app.use('/people',peopleRouter)
app.use('/bank',bankRouter)


app.listen(4000)