const mongoose = require("mongoose");

const partyVehicleSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    partyId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    partyName: {
      type: String,
      required: true,
    },
    vehicleNo: {
      required: true,
      type: String,
    },
  },
  {
    timestamps: true,
  }
);

const PartyVehicle = mongoose.model("PartyVehicle", partyVehicleSchema);

module.exports = PartyVehicle;
