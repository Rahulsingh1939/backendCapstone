//MY IMPORTS
const express = require('express')
const bodyparser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')
const ejs = require('ejs')

const app = express()


const dotenv = require('dotenv')
dotenv.config()


//Environmental Variables
const PORT = process.env.PORT || 3000
const MONGODB_URL = processs.env.MONGODB_URL


//Global MiddleWares
app.use(bodyparser.urlencoded({extended:true}))
app.use(bodyparser.json())
app.use(express.static('./public'))
app.use(cors())

app.set('view engine','ejs')


app.get('/',(req,res)=>{
    res.json({status : "Success",
            message: 'Everything Fine'})
})



app.listen(PORT,(error)=>{
    if(error){
        console.log(error)
        console.log('Error Occured')
    }
    else {
        mongoose.connect(MONGODB_URL)
        .then(()=>{
            console.log('Server Up SuccessFully')
        })
        .catch(error=>{
            console.log('Error Connecting DataBase')
            console.log(error)
        })
    }
})