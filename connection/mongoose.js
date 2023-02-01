const mongoose = require('mongoose')
const dotenv = require('dotenv')
mongoose.set('strictQuery', false);


dotenv.config()     

const ConnectDB =async()=>{
   try {
    await mongoose.connect(process.env.MONGO_URL,{useNewUrlParser: true,useUnifiedTopology: true},()=>{
        console.log("connected to mongodb")
    
    })
} catch (error) {
    console.log(error)
   } 


 }  


module.exports = ConnectDB

