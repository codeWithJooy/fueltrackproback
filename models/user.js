const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  firstname: {
    type: String,
    required: true,
  },
  lastname: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  acess:{
    type:Object,
  },
  userType:{
    type:String,
    default:"Super User"
  },
  pumpId:{
   type: mongoose.Schema.Types.ObjectId,
  }
},
{
    timestamps:true,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;
