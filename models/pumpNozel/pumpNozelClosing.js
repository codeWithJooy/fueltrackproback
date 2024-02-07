const mongoose = require("mongoose");

const pumpNozelClosingSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nozelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    closingMeter: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PumpNozelClosing = mongoose.model("PumpNozelClosing", pumpNozelClosingSchema);

module.exports = PumpNozelClosing;