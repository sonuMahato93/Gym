const attendanceDetails = require('../../models/attendanceSchema')




// Finding University Details & Using Populate() function
const getAttandance=(req,res)=>{
    attendanceDetails.find({})           
    .populate("user")
    .then(data=>{
        res.send(data)
    })
    .catch(err=>{
        res.status(500).send({message:"Cannot find the users"})
    })
}


module.exports = getAttandance