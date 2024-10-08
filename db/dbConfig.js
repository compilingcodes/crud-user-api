const mongoose = require('mongoose')

const connectDb=async (url)=>{

  return await mongoose.connect(url)
  .then(res => {

    if(process.env.MODE === "development" )
    console.log(`local mongodb database connected `)

    if(process.env.MODE === "production" )
    console.log(`cloud mongodb database connected`)
  
  }).catch(err=> console.log(err))

} 

module.exports=connectDb