const mongoose = require("mongoose");

const itemSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  productName: {
    required:true,
    type: String,
  },
  symbol:{
    required:true,
    type:String,
  },
  unit:{
    type:String,
  },
  type:{
    type:String,
  },
 
},{
    timestamps:true,
});

const ItemModel = mongoose.model("ItemModel", itemSchema);

module.exports = ItemModel;