const mongoose = require("mongoose");

const itemRateSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  product: {
    required:true,
    type: String,
  },
  date:{
    required:true,
    type:String,
  },
  rate:{
    type:String,
    required:true,
  },
  
},{
    timestamps:true,
});

const ItemRateModel = mongoose.model("ItemRateModel", itemRateSchema);

module.exports = ItemRateModel;