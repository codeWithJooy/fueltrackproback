const mongoose = require("mongoose");

const pumpNozelSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nozelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      required: true,
      type: String,
    },
    openingMeter: {
      required: true,
      type: String,
    },
    closingMeter: {
      type: String,
      required: true,
    },
    testing: {
      type: String,
      required: true,
    },
    additionalOut: {
      type: String,
      required: true,
    },
    additionalIn: {
      type: String,
    },
    netSales: {
      type: String,
      required: true,
    },
    salesDsr: {
      type: String,
      required: true,
    },
    salesDiff: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const PumpNozelModel = mongoose.model("PumpNozel", pumpNozelSchema);

module.exports = PumpNozelModel;
