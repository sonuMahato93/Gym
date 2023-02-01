const mongoose = require('mongoose');
const UserDetails = require('./userschema');


const attendanceSchema = new mongoose.Schema({
    userId:[{ 
      type: mongoose.Schema.Types.ObjectId,    ///show only id
      ref:UserDetails
    }], // Reference of User
    
    
    createdAt: {
      type: Date,
      default: Date.now()
    },
    typeOfExercise:{
      type:String
    }
});

const attendanceDetails = mongoose.model('attendanceDetails',attendanceSchema);

module.exports = attendanceDetails




// post member deactive flag
// is active or not check every time

// attenda

































