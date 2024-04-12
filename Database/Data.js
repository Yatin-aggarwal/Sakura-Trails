
const mongoose = require('mongoose');
const {Schema} = mongoose;
const Database = new  Schema({
      firstname :{
            type :String,
            required : true
      },
      lastname:({
            type:String,
            required:true
      }),
      email:({
            type: String,
            required:true,
            unique:true
            
      }),
      password:({
            type:String,
            required:true,
            
      })
});
model = mongoose.model("User_Data",Database);
module.exports = model;