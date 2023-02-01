const UserDetails = require('../../models/userschema')
const mongoose = require('mongoose')
const {Types} = mongoose;




//updating a user identified user by user id
const UserProfileUpdate=(req,res)=>{
   if(!req.body){
       return res
       .status(400)
       .send({message:"Data to update can not be empty"})
   }
const id=req.body.id;
UserDetails.findOneAndUpdate({_id:Types.ObjectId(id)},req.body)
   .then(async data=>{
       if(!data){
         return  res.status(404).send({message:`Cannot Update with UseID ${id}. UserID not found!`})
       }else{
         return  res.send(await UserDetails.findOne({_id:Types.ObjectId(id)},req.body))
       }
   })
   .catch(err=>{
      return res.status(500).send({message:"Error Update UserID information"})
   })

}

module.exports = UserProfileUpdate