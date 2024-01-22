const mongoose = require("mongoose");

const noFuelSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  productName: {
    type: String,
  },
  size:{
    type: String,
    required: true,
  },
  quantity:{
    type: String,
    required: true,
  },
},{
    timestamps:true,
});

const NoFuelModel = mongoose.model("NoFuel", noFuelSchema);

module.exports = NoFuelModel;