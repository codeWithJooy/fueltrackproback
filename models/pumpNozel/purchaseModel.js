const mongoose = require("mongoose");

const purchaseModelSchema = new mongoose.Schema(
  {
    pumpId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    date: {
      type: String,
      required: true,
    },
    supplierName: {
      required: true,
      type: String,
    },
    supplierInvoice: {
      type: String,
    },
    invoiceDate: {
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
    },
    deliveryCharge: {
      type: String,
    },
    tcs: {
      type: String,
    },
    extra: {
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

const PurchaseModel = mongoose.model("PurchaseModel", purchaseModelSchema);

module.exports = PurchaseModel;
