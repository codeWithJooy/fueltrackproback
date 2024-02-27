const mongoose = require("mongoose");

const pumpNozelSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    mpd:{
      required: true,
      type: String,
    },
    nozelId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    nozelName:{
      required: true,
      type: String,
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
    rate:{
      type:String,
      required:true,
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
    total:{
      type:String,
      required:true,
    },
    salesDsr: {
      type: String,
      
    },
    salesDiff: {
      type: String,
      
    },
    status:{
      type:String,
      default:"Pending",
    }
  },
  {
    timestamps: true,
  }
);

const PumpNozelModel = mongoose.model("PumpNozel", pumpNozelSchema);

module.exports = PumpNozelModel;
