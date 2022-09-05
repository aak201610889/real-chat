const express=require('express')
const cors=require('cors')
const mongoose=require('mongoose')
require('dotenv').config()
const app=express()

app.use(cors())
app.use(express.urlencoded({extended:true}))
app.use(express.json())



mongoose.connect(process.env.MONGO_URL,{useNewUrlParser:true}).then((res)=>{
    console.log('connect with database')
}).catch(err=>{console.log('err'+err)})

app.get('/',(req,res)=>{
    res.send('hello world')
})
const port =process.env.PORT
app.listen(port,()=>{console.log(`server on port ${port}`)})