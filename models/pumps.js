const mongoose = require("mongoose");

const pumpSchema = new mongoose.Schema({
  ownerId: {
    type: mongoose.Schema.Types.ObjectId,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  plotNo: {
    type: String,
  },
  street: String,
  city: String,
  state: String,
  owner: String,
  pan: String,
  gstin: String,
  vat: String,
  cst: String,
  tin: String,
  tan: String,
});

const PumpModel = mongoose.model("Pump", pumpSchema);

module.exports = PumpModel;
