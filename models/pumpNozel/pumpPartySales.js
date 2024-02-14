const mongoose = require("mongoose");

const pumpPartySchema = new mongoose.Schema(
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
    vehicle: {
      required: true,
      type: String,
    },
    salesLedger: {
      required: true,
      type: String,
    },
    item: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
      required: true,
    },
    amount: {
      type: String,
      required:true,
    },
    delivery: {
      type: String,
    },
    tcs: {
      type: String,
    },
    roundoff: {
      type: String,
    },
    status: {
      type: String,
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

const PumpPartySales = mongoose.model("PumpPartySales", pumpPartySchema);

module.exports =PumpPartySales
