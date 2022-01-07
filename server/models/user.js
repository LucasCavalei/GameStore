 const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

 const usuarioSchema = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email:{
       type: String,
       required: true
   },
   password:{
       type:String,
       required: true
   },
   date:{
       type:Date,
       default:Date.now
   }
    
 });

module.exports = mongoose.model("User", usuarioSchema);// essa linha precisou ficar abaixo do bcrypt para funcionar 