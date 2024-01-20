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
  setup: {
    type: Boolean,
    default: false,
  },
},
{
    timestamps:true,
});

const UserModel = mongoose.model('User', userSchema);

module.exports = UserModel;