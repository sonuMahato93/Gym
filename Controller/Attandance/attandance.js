const { database } = require('firebase-admin');
const attendanceDetails = require('../../models/attendanceSchema')


//Creating attendance Details
const attendance=(req,res)=>{
    if(!req.body){
        res.status(400).send({message:"Content can not be empty!"})
    return;
    }
    
    const attendance = new attendanceDetails({
        user:req.body.user,
        active:req.body.active
    })
    attendance.save()
    .then(detail=>{
        res.json(detail)
    })
    .catch(err=>{
        res.status(500).send({message:err.message ||"Some error occurred while creating a create operation "})
    })
}


module.exports = attendance



