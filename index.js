import express from 'express'
import mongoose from 'mongoose'
const app=express()
import cors from 'cors'
mongoose.connect('mongodb://127.0.0.1:27017/Bank')
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