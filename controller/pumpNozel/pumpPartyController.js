const LedgerModel = require("../../models/Ledger");
const PartyVehicle = require("../../models/pumpNozel/partyVehicle");

const getPartyName = async (req, res) => {
  try {
    const { pumpId } = req.body;
    const query = { pumpId };
    const partyName = await LedgerModel.find(query);

    if (partyName) {
      return res.json({ code: 200, model: partyName });
    } else {
      return res.json({ code: 200, model: [] });
    }
  } catch (error) {
    return res.status(500).json({ code: 502, msg: error.message });
  }
};
const addPartyVehicle = async (req, res) => {
  try {
    const { pumpId, partyId,partyName, vehicleNo } = req.body;
    const newVehicle = new PartyVehicle({
      pumpId,
      partyId,
      partyName,
      vehicleNo,
    });
    const saveVehicle = await newVehicle.save();
    return res.json({ code: 200, model: saveVehicle });
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};
const getPartyVehicle = async (req, res) => {
  try {
    const {pumpId,partyId}=req.body
    let query={pumpId,partyId}
    const allVehicles=PartyVehicle.find(query)
    return res.json({code:200,mode:allVehicles})
  } catch (error) {
    return res.status(500).json({ code: 500, msg: error.message });
  }
};

module.exports = {
  getPartyName,
  addPartyVehicle,
  getPartyVehicle,
};
