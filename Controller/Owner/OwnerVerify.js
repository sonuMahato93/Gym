const ownerDetails = require('../../models/ownerSchema')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const admin = require('../Firebase/firebase-config')


const OwnerVerify = async (req, res) => {

    // Our verification or register or logic starts here
    try {
      // Get owner input
      const  {mobileNumber,isActive} = req.body;
  
      // Validate owner input
      if (!(mobileNumber)) {
       return res.status(400).send("Input is required");
      }


      // // firebase validation  here
// const idToken = req.header('Authorization') 
// //const idToken = req.header('Authorization')
// try{
//   const decodeValue = await admin.auth().verifyIdToken(idToken);
//   if (decodeValue) {
//             console.log(decodeValue);
//                
  
 

// checking Owner existing in our database
const existingOwner = await ownerDetails.findOne({ mobileNumber });
     // checking condition if owner is existing then check active or not 
if(existingOwner){
            // checking Owner is active or not 
               const OwnerActive = await UserDetails.findOne({ isActive });
               if(OwnerActive){
                 return res.json({message: 'Owner is already active'})
               }
  // owner is not active then Create token
             let jwtSecretKey = `${process.env.JWT_SECRET}`;
            const token =  jwt.sign({ mobileNumber },jwtSecretKey,{expiresIn: "730d"});
            return res.json({token})
}
 
// Owner is not existing in our database then creating 
      const owner = await ownerDetails.create({
        mobileNumber:req.body.mobileNumber
      });
  
      // Create token
       let jwtSecretKey = `${process.env.JWT_SECRET}`;
       const token = jwt.sign({mobileNumber },jwtSecretKey,{expiresIn: "730d"});
      // save owner token
      owner.token = token;
  
      owner.save()
      // return new owner
     return res.status(201).json(owner);
      }
//  console.log("decoded value is in correct")
//  return res.json({ message: 'Unauthorized' });    //******** check the condition after firebase authentication
 
//  } catch (e) {
//    return res.json({ message: 'Invalid token Error' });
//  } 
//  }
catch (err) {
   console.log(err);
 }

};
  

module.exports = OwnerVerify



