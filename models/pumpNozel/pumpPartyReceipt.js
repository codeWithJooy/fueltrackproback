const mongoose = require("mongoose");

const pumpPartyReceiptSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    partyId: {
      type: mongoose.Schema.Types.ObjectId,
      required:true,
    },
    partyName: {
      type: String,
      required: true,
    },
    date: {
      required: true,
      type: String,
    },
    amount: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PumpPartyReceipt = mongoose.model("PumpPartyReceipt", pumpPartyReceiptSchema);

module.exports =PumpPartyReceipt
