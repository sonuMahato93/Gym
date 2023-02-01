const jwt =require('jsonwebtoken')


const verifyToken = async(req, res,next) => {
   // Get token value to the json body
          let jwtSecretKey = `${process.env.JWT_SECRET}`;
         const token = req.header('Token');
try {
  const decode = await jwt.verify(token, jwtSecretKey);
  if (decode) {
           // console.log(decode);
           // return   res.json({ login: true, data: decode });
            return next();        
  }
  return res.json({ message: 'Unauthorized',login: false, data: 'error' });
} catch (e) {
  return res.json({ message: 'Invalid Token' ,login: false, data: 'error' });
}
}

  module.exports = verifyToken