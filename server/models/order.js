const mongoose = require('mongoose');

const orderSchema = mongoose.Schema({

   orderProducts:[ {id:String, name:String, price:Number}],
   somaCart:{
        type:Number,required:true
  } ,user:{type: mongoose.Schema.Types.ObjectId, ref:'User'}
});

module.exports = mongoose.model('Order', orderSchema);
