const mongoose = require("mongoose");

const purchaseModelSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date:{
      type:String,
      required:true,
    },
    supplierName:{
      required: true,
      type: String,
    },
    supplierInvoice: {
      required: true,
      type: String,
    },
    invoiceDate: {
      required: true,
      type: String,
    },
    purchaseLedger: {
      type: String,
      required: true,
    },
    itemName: {
      type: String,
      required: true,
    },
    qty: {
      type: String,
      required: true,
    },
    rate: {
      type: String,
    },
    amount: {
      type: String,
      required: true,
    },
    deliveryCharge: {
      type: String,
      required:true,
    },
    tcs: {
      type: String,
      required:true,
    },
    extra:{
        type:String,
        required:true,
    },
    roundoff:{
        type:String,
        required:true,
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

const PurchaseModel = mongoose.model("PurchaseModel", purchaseModelSchema);

module.exports = PurchaseModel;