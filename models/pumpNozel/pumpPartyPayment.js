const mongoose = require("mongoose");

const pumpPartyPaymentSchema = new mongoose.Schema(
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

const PumpPartyPayment = mongoose.model("PumpPartyPayment", pumpPartyPaymentSchema);

module.exports =PumpPartyPayment