const mongoose = require("mongoose");

const tankSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  tankName: {
    required:true,
    type: String,
  },
  product:{
    required:true,
    type:String,
  },
  quantity:{
    type:String,
    required:true,
  },
},{
    timestamps:true,
});

const TankModel = mongoose.model("Tank", tankSchema);

module.exports = TankModel;