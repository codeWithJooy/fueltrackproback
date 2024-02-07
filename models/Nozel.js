const mongoose = require("mongoose");

const nozelSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  nozelName: {
    required:true,
    type: String,
  },
  product:{
    required:true,
    type:String,
  },
  mpd:{
    type:String,
    required:true,
  },
  tank:{
    type:String,
    required:true,
  },
  closingReading:{
    type:String,
    required:true,
  }
},{
    timestamps:true,
});

const NozelModel = mongoose.model("Nozel", nozelSchema);

module.exports = NozelModel;