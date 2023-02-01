const UserDetails = require('../../models/userschema')
const dotenv = require('dotenv')
const jwt = require('jsonwebtoken');
const admin = require('../Firebase/firebase-config')


const UserVerify = async (req, res) => {

   // Our verification or register or logic starts here
    try {
      // Get user input
      const  {mobileNumber,isActive} = req.body;
  
      // Validate user input
      if (!(mobileNumber )) {
       return res.status(400).send("Input is required");
      }
  
     
  

// // firebase validation here
// const idToken = req.header('Authorization') 
// //const idToken = req.header('Authorization')
// try{
//   const decodeValue = await admin.auth().verifyIdToken(idToken);
//   if (decodeValue) {
//             console.log(decodeValue);
//              



// checking User existing in our database  
const existingUser = await UserDetails.findOne({ mobileNumber });
      // checking condition if User is existing then check active or not 
if(existingUser){
              // checking User is active or not 
  const UserActive = await UserDetails.findOne({ isActive });
  if(UserActive){
    return res.json({message: 'user is already active'})
  }
  
    // User is not active then Create token
            let jwtSecretKey = `${process.env.JWT_SECRET}`;
            const token =  jwt.sign({ mobileNumber },jwtSecretKey,{expiresIn: "730d"});
           // const tok = UserDetails.updateOne({token})
            return res.json({token})
}


// User is not existing in our database then creating 
      const user = await UserDetails.create({
        mobileNumber:req.body.mobileNumber
      });
  
      // Create token
       let jwtSecretKey = `${process.env.JWT_SECRET}`;
       const token = jwt.sign({mobileNumber },jwtSecretKey,{expiresIn: "730d"});
      // save user token
      user.token = token;
  
      user.save()
      // return new user
     return res.status(201).json(user);
    
  
//  }
//  console.log("decoded value is in correct")
//  return res.json({ message: 'Unauthorized' });    //******** check the condition after firebase authentication
 
//  } catch (e) {
//    return res.json({ message: 'Invalid token Error' });
//  } 
 }catch (err) {
   console.log(err);
 }


    
};
  

module.exports = UserVerify





































      
//       // check if user already exist
//       // Validate if user exist in our database
//       const oldUser = await UserDetails.findOne({ number });
//        if (oldUser) {                                               //update the user and create new token
        
//  // if olduser then verify the token and enter into main page
//           // Get token value to the json body
//           let jwtSecretKey = `${process.env.JWT_SECRET}`;
//          const token = req.header('Token');
// try {
//   const decode = await jwt.verify(token, jwtSecretKey);
//   if (decode) {
//            // console.log(decode);
//             return   res.json({ login: true, data: decode });
//   }
//   return res.json({ message: 'Unauthorized',login: false, data: 'error' });
// } catch (e) {
//   return res.json({ message: 'Invalid Token' ,login: false, data: 'error' });
// }

// }
    
      
    
     
// // firebase validation 
     
// const Fierbasetoken = req.headers.authorization;
// try {
//   const decodeValue = await admin.auth().verifyIdToken(Fierbasetoken);
//   if (decodeValue) {
//             console.log(decodeValue);
//              // Create user in our database  

// const existingUser = await UserDetails.findOne({ number });

//       const user = await UserDetails.create({
//         number:req.body.number
//       });
  
//       // Create token
//        let jwtSecretKey = `${process.env.JWT_SECRET}`;
//        const token = jwt.sign(
//         { user_id: user._id, number },jwtSecretKey,
//         {
//           expiresIn: "2h",
//         }
//       );
//       // save user token
//       user.token = token;
  
//       user.save()
//       // return new user
//      return res.status(201).json(user);
    
//   }
//   return res.json({ message: 'Unauthorized' });
// } catch (e) {
//   return res.json({ message: 'Internal Error' });
// } } catch (err) {
//   console.log(err);
// }









     
     
  //  // Create user in our database
  //     const user = await UserDetails.create({
  //       number:req.body.number
  //     });
  
  //     // Create token
  //      let jwtSecretKey = `${process.env.JWT_SECRET}`;
  //      const token = jwt.sign(
  //       { user_id: user._id, number },jwtSecretKey,
  //       {
  //         expiresIn: "2y",
  //       }
  //     );
  //     // save user token
  //     user.token = token;
  
  //     user.save()
  //     // return new user
  //    return res.status(201).json(user);
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   // Our register logic ends here