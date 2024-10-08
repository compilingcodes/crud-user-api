const express= require('express')
const { StatusCodes } = require('http-status-codes')
require('dotenv').config()


//importing db config method
const  connectDb = require('./db/dbConfig')

const PORT= process.env.PORT

const app= express()

//body parsrr config
app.use(express.urlencoded({ extended:true }))
app.use(express.json())

//index route
app.get(`/`, (req,res) => {
return res.status(StatusCodes.OK).json({ status: true, msg: `crud user api`})
})

//api route
app.use(`/api/user`, require(`./route/userRoute`))

//default route
app.all(`*`, async(req, res)=>{
  return res.status(StatusCodes.NOT_FOUND).json({ status:false , msg: `requested path not found`})
})

//listener

app.listen(PORT, ()=>{
  
 if(process.env.MODE === "development"){
  connectDb(process.env.MONGO_DEV)
 } 

 if(process.env.MODE === "production"){
  connectDb(process.env.MONGO_PROD)
 } 

  console.log(`server is sconncted and runniung at @http://localhost:${PORT}`)
})