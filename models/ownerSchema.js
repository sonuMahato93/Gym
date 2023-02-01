const mongoose = require('mongoose')
// var timeZone = require('moment-timezone');
// var moment = require('moment');
// const date = moment(new Date()); 
// const d = date.tz('Asia/Delhi').format();
// console.log(d);

var OwnerSchema = new mongoose.Schema({

    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    age:{
        type:Number
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    whatsApp:{
        type:Number
        
    },
   mobileNumber:{
        type:Number
        
    },
    email:{
        type:String
     
    },
    pinCode:{
        type:Number
    },
    district:{
        type:String
    },
    state:{
        type:String
    },
   
    firebaseToken:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now()
       // default:d
       // default: moment.tz(Date.now(), "Asia/Delhi")
      },
   image:{
    data:Buffer,
    contentType:String,
   },
   isActive:{
    type:Boolean
  },
}
)
   



const OwnerDetails = mongoose.model('OwnerDetails',OwnerSchema);

module.exports = OwnerDetails