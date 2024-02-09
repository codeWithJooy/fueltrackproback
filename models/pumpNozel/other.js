const mongoose = require("mongoose");

const pumpOtherSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    productName:{
        required:true,
        type:String,
    },
    date: {
      required: true,
      type: String,
    },
    quantity: {
      required: true,
      type: String,
    },
    rate: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PumpOtherModel = mongoose.model("PumpOtherModel", pumpOtherSchema);

module.exports = PumpOtherModel;