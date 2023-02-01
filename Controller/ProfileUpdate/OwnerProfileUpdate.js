 const OwnerDetails = require('../../models/ownerSchema')
 const mongoose = require('mongoose')
 const {Types} = mongoose;
const multer = require('multer')




 



//updating a owner identified user by user id
const OwnerUpdateProfile=(req,res)=>{
    if(!req.body){
        return res
        .status(400)
        .send({message:"Data to update can not be empty"})
    }
const id=req.body.id;
OwnerDetails.findOneAndUpdate({_id:Types.ObjectId(id)},req.body)
    .then(async data=>{
        if(!data){
          return  res.status(404).send({message:`Cannot Update with UseID ${id}. UserID not found!`})
        }else{
          return  res.send(await OwnerDetails.findOne({_id:Types.ObjectId(id)},req.body))
        }
    })
    .catch(err=>{
       return res.status(500).send({message:"Error Update UserID information"})
    })

}

module.exports = OwnerUpdateProfile