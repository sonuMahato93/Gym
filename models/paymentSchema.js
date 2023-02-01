const mongoose = require('mongoose');
const UserDetails = require('./userschema')
const OwnerDetails = require('./ownerSchema')


const PaymentSchema = new mongoose.Schema({
    userId:[{ 
      type: mongoose.Schema.Types.ObjectId,
      ref:UserDetails
    }], // Reference of User
    OwnerId:[{ 
        type: mongoose.Schema.Types.ObjectId,
        ref:OwnerDetails
      }], // Reference of Owner
    createdAt: {
      type: Date,
      default: Date.now()
    },
    typeOfPlan:{
      type:String
    },
    amount:{
      type:Number
    }
});

const PaymentDetails = mongoose.model('PaymentDetails',PaymentSchema);

module.exports = PaymentDetails






































