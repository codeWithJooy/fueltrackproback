const mongoose = require("mongoose");

const ledgerSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  pumpId: {
    type: String,
    required: true,
  },
  partyName: {
    required:true,
    type: String,
  },
  group:{
    required:true,
    type:String,
  },
  house:{
    type:String,
  },
  street:{
    type:String,
  },
  pincode:{
   type:String,
  },
  city:{
    type:String,
  },
  state:{
    type:String,
    required:true,
  },
  pan:{
    type:String,
  },
  gst:{
    type:String,
  },
  mobile:{
    type:String,
    required:true,
  },
  email:{
    type:String,
  },
  openingBalance:{
    type:String,
    required:true,
  },
},{
    timestamps:true,
});

const LedgerModel = mongoose.model("Ledger", ledgerSchema);

module.exports = LedgerModel;