const Ledger = require("../models/Ledger");

const getLedger = async (req, res) => {
  try {
    const { ownerId, pumpId } = req.body;

    const ledger = await Ledger.find({ ownerId, pumpId });
    if (ledger) {
      return res.status(200).json({ code: 200, model: ledger });
    } else {
      return res.json({ code: 400, model: [] });
    }
  } catch (error) {
    res.status(500).json({ code: 500, msg: error.message });
  }
};

const addLedger = async (req, res) => {
  try {
    const {
      ownerId,
      pumpId,
      partyName,
      group,
      house,
      street,
      city,
      pincode,
      state,
      pan,
      gst,
      mobile,
      email,
      openingBalance,
    } = req.body;
    const newLedger = new Ledger({
      ownerId,
      pumpId,
      partyName,
      group,
      house,
      street,
      pincode,
      city,
      state,
      pan,
      gst,
      mobile,
      email,
      openingBalance,
    });

    const savedLedger = await newLedger.save();
    res.json({ code: 200, ledger: savedLedger });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
module.exports = {
  getLedger,
  addLedger,
};
