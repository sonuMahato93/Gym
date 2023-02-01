const bodyparser = require('body-parser')
const express= require('express')
const ConnectDB =require('./connection/mongoose')
const UserVerify = require('./Controller/User/UserVerify')
const OwnerVerify = require('./Controller/Owner/OwnerVerify')
const UserProfileUpdate = require('./Controller/ProfileUpdate/UserProfileUpdate')
const OwnerProfileUpdate = require('./Controller/ProfileUpdate/OwnerProfileUpdate')
const verifyToken = require('./Controller/Middleware/verify')
//const imageUpload = require('./Controller/user/profileImage')
//const multer = require('multer')
const attendance = require('./Controller/Attandance/attandance')
const getAttandance = require('./Controller/Attandance/getAttandance')




const app= express()
app.use(bodyparser.urlencoded({extended:true}))
app.use(express.json());

ConnectDB()

// //storage

// const Storage = multer.diskStorage({
//     destination:'uploads',
//     filename:(req,file,cb)=>{
//       cb(null,file.originalname)
//     }
// })

// const upload = multer({
//     storage:Storage
// }).single('image')    //use this name image


// verify user in upto

app.post('/user/verify',UserVerify,(req,res)=>{
    res.render("home")
})

app.post('/owner/verify',OwnerVerify,(req,res)=>{
    res.render("home")
})


app.put('/user/updateProfile',verifyToken,UserProfileUpdate,(req,res)=>{
    res.render("home")
})


app.put('/owner/updateProfile',verifyToken,OwnerProfileUpdate,(req,res)=>{
    res.render("home")
})


// app.put('/owner/imageUpload',verifyToken,upload,imageUpload,(req,res)=>{
//     res.render("home")
// })







app.post('/attendance',attendance,(req,res)=>{
    res.render("home")
})




app.get('/attendance',getAttandance,(req,res)=>{
    res.render("home")
})



app.post('/payment',attendance,(req,res)=>{
    res.render("home")
})



app.listen(3000,()=>{
    console.log("your port is connected to 3000")
})







