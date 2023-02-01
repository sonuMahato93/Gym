const mongoose = require('mongoose')


var UserSchema = new mongoose.Schema({

    firstname:{
        type:String
    },
    lastname:{
        type:String
    },
    dateOfBirth:{
        type:String
    },
    gender:{
        type:String
    },
    address:{
        type:String
    },
    whatsApp:{
        type:Number,
    },
   mobileNumber:{
        type:Number
    },
    email:{
        type:String,
    },
    firebaseToken:{
        type:String
    },
    createdAt: {
        type: Date,
        default: Date.now()
      },
      bloodGroup:{
        type:String
      },
      height:{
        type:String
      },
      weight:{
        type:String
      },
     
      isActive:{
        type:Boolean
      },
    guardianNumber:{
        type:Number
    },
      //   role: {
    //     type: String,
    //     default: "User",
    //     required: true,
    //   },
//    attandance:{
//     details:[{
//          type: mongoose.Schema.Types.ObjectId,
//          ref:attendanceDetails
//         }],
//    }
}
)
   



const UserDetails = mongoose.model('UserDetails',UserSchema);

module.exports = UserDetails